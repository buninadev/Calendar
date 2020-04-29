import React from 'react';
import './App.css';


class DataFetcher extends React.Component{

  state= {
    loading: true,
    offers: null
  };
  
async componentDidMount() {
  const url= "https://back.staging.bsport.io/api/v1/offer/?min_date=2020-04-27&max_date=2020-05-03&company=6" ;
  const response = await fetch(url);
  const data= await response.json();
  this.setState({loading:false,offers:data.results})
}

render() {
  return (
  <div>
    {this.state.loading || !this.state.offers ?(
    <div className="Indicator">loading........</div>
    ):(
      <div>
    <div className="Indicator" >Data Loaded</div> 
    <Navigation NavOffers={this.state.offers} ></Navigation>
    </div>)  
  }
  </div>
  
 
  );
}
}

// Navigation class: creates a group of buttons (parent of DayButton)
class Navigation extends React.Component{

  constructor(){
    super();
    this.state = {offers: null}
}
createButton(year,month,day){
  const dayStr= String(day).padStart(2, '0');
  const monthStr=String(month).padStart(2, '0');
  const dateStr= dayStr+'/'+monthStr;
  return(<button key={dayStr} onClick={this.ClickHandler.bind(this,year,month,day)}>
      {dateStr} 
      </button>);
}

checkSameDate(date1 ,date2){

   date1 = new Date(date1);
   date2 = new Date(date2);

  var sameday= date1.getDate()===date2.getDate();
  var samemonth=date1.getMonth()===date2.getMonth();
  var sameyear=date1.getFullYear()===date2.getFullYear();
  return(sameday&& samemonth && sameyear)
}


LookForOffers(input,year,month,day){
  var output=[]
input.forEach(result => {
 var startDate=result.date_start;
 var conditon=this.checkSameDate(startDate,year+'/'+month+'/'+day)

if(conditon){  output.push(result)}
  
});
return output
}

UNSAFE_componentWillMount(){

  this.ClickHandler(2020,4,27);
}
ClickHandler(year, month, day){

var input= this.props.NavOffers;
var SelectedOffers= this.LookForOffers(input,year,month,day);
this.setState({offers:SelectedOffers})

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
return(<div>
    <div className="btn-group">
      {this.laybuttons('2020-04-27')}
    </div>
    <div className="offer-group">
    <OfferTable Displayoffers={this.state.offers}></OfferTable></div>
    </div>
    );
  }
}
class OfferTable extends React.Component{
  cool(){
    var offerGroup= []
var offers = this.props.Displayoffers
  offers.forEach(offer => {  
  offerGroup.push(<Offer key={offer.id} activity={offer.activity} disp={offer.available} level={offer.level} full={offer.full} duration={offer.duration_minute} coach={offer.coach} ></Offer>)
  });
  return(offerGroup)
}
  render(){
  return(<div>{this.cool()}</div>);
  }
}

class Offer extends React.Component{
render(){
   return(<div className="Day-offers"><div className="offre">
   <div><b className='activity'>Title: {this.props.activity}</b></div>
   <span className= "desc">Disponiblité: {this.props.disp.toString()}</span>
   <span className= "desc">Niveau: {this.props.level}</span>
   <span>Plein: {this.props.full.toString()}</span>
   <br></br>
   <span className='desc'>durée: {this.props.duration}</span>
   <span className ='desc'>Par: {this.props.coach}</span>
   </div>
   </div> );
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
        <span>
          Semaine actuelle : Lun 27/04 - Dim 03/05
        </span>
      </div>
      <DataFetcher></DataFetcher>
    </div>
  );
  
}

export default App;
