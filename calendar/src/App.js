import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class DayButton extends React.Component {
  state= {
    loading: true,
    offers: null,
  };
  constructor(props) {
    super(props)
  this.Clickaction= this.Clickaction.bind(this) // binding clickaction to the button instance
  }

// seperatly render an instance of OfferTable while passing a list of offers from API as a property 
  UpdateOffers(offers){
    ReactDOM.render(<OfferTable offers={offers}></OfferTable>,document.getElementById('offers'))  
  }
Clickaction()
{
  let offertable=[]
  this.state.offers.forEach(element=>{
   offertable.push(OfferTable.createOffer(element.activity,element.available,element.level,element.full,element.duration_minute,element.coach))
  });

  this.UpdateOffers(offertable)
}


// async method that fetch data from api for every DayButton Instance ... the goal is to have for every button an offers state (data) that is related too
// props are assigned using Navigator.createbutton ::: Line 92
async componentDidMount() {
  const dateObj=this.props.year+"-"+this.props.month+"-"+this.props.day
  const url= "https://back.staging.bsport.io/api/v1/offer/?date="+dateObj+"&company=6" ;
  console.log(url)
  const response = await fetch(url);
  const data= await response.json();
  this.setState({loading:false,offers:data.results})
}
  render() {
    return (
      <button onClick={this.Clickaction}>
        {this.props.date} 
      </button>
    );
  }
}

/*  Just the first test for data fetching from the API   */
// class DataFetcher extends React.Component{

//   state= {
//     loading: true,
//     offers: null
//   };
  
// async componentDidMount() {
//   const url= "https://back.staging.bsport.io/api/v1/offer/?min_date=2020-04-27&max_date=2020-05-03&company=6" ;
//   const response = await fetch(url);
//   const data= await response.json();
//   this.setState({loading:false,offers:data.results})
// }

// getoffers(){
// if(!this.state.loading|| this.state.offers)
// return(this.state.offers);
// }

// render() {
//   return (
//   <a >
//     {this.state.loading|| !this.state.offers ?(
//     <div className="Indicator">loading........</div>
//     ):(
//     <div className="Indicator" >Data Loaded</div>)  
//   }
//   </a>
//   );
// }
// }



// Navigation class: creates a group of buttons (parent of DayButton)
class Navigation extends React.Component{


createButton(year,month,day){
  const dayStr= String(day).padStart(2, '0');
  const monthStr=String(month).padStart(2, '0');
  const dateStr= dayStr+'/'+monthStr;
return(<DayButton date={dateStr} year={year} month={month} day={day}></DayButton>);
}

addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

laybuttons(start){
  var startdate =new Date(start);
  let buttons=[] // array that gonna contain a list of (<DayButton date={dateStr} year={year} month={month} day={day}></DayButton>)
   for (let index = 0; index < 7; index++) {
        var Iterdate=this.addDays(startdate,index) // adding days to start date for iteration
        var day =Iterdate.getDate();
        var month= Iterdate.getMonth()+1;
        var year =Iterdate.getFullYear();
        buttons.push(this.createButton(year,month,day))
      }
      return buttons
}


  render(){
return(
    <div className="btn-group">
      {this.laybuttons('2020-04-27')}
    </div>
    );
  }
}


class OfferTable extends React.Component{

static createOffer(activity,disp,level,full,duration,coach){    // static method because it is relation to offerTable, it can be moved to class DayButton and nothing will change
                                                                  // I keep it in this class for code readability

  const offer =<div className="Day-offers"><div className="offre">
  <div><b className='activity'>Title: {activity}</b></div>
  <a className= "desc">Disponiblité: {disp.toString()}</a>
  <a className= "desc">Niveau: {level}</a>
  <a>Plein: {full.toString()}</a>
  <br></br>
  <a className='desc'>durée: {duration}</a>
  <a className ='desc'>Par: {coach}</a>
  </div>
  </div>
  return offer
}

render(){
   return(<div className ="offer-group">{this.props.offers}</div>)
}

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Company ID: 6
        </p>
      </header>

      <div className="Actual-week">
        <a>
          Semaine actuelle : Lun 27/04 - Dim 03/05
        </a>
      </div>
      <div className="Days-week">
      <Navigation></Navigation>
      </div >
      <div className="offers">

      </div>
      
    </div>
  );
  
}

export default App;
