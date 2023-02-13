import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [indexnumber,setindexnumber] = useState(0);

const [question,setquestion] = useState([
  {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language",
      ],
  },
  {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
      ],
  },
  {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor",
      ],
  },
  {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language",
      ],
  },
  {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language",
      ],
  },

])

const [result,setresult] = useState(false);  // condition base pr boolean hona lazmi hai 
const [marks,setmarks] = useState(0);
const checkans = (userselected,correctans)=>{

  // es se check rahy hai ke value mil rahi hai hmy onclick krne  pr 
  // console.log('userselected====>',userselected)
  //   console.log('correctanswer===>',correctans);
  if(userselected==correctans){
    
    setmarks(marks + 1);
    // console.log(marks);
  }
  setindexnumber(indexnumber+1);
if(indexnumber+1 == question.length){
  setresult(true);
}
}

// yaha esliye likh rahy ta ke hm dekh sky ke marks thek se return ho raha q ke oper function me 0 show krwa raha hai +1 ni kr raha osme time lagta hai waisy to thek chal raha hai bs thora time lagy ga esliye function ke bahir likh kr check kr rahy hai 
// console.log(marks);




// html code
  return (
    <div className="App">
      <header className="App-header">
      <div className='editbody'>
      <div className='editheadbg'>
        <h1 className='edithead'>Quiz App</h1>
        {/* <hr /> */}
        </div>
        
{
result ? <h1 className='editscore'> <span className='editheading'>Your Marks is :</span>  {marks}</h1> : 
<div className='editbd'>
<h3>Q <span>{indexnumber+1}</span> : {question[indexnumber].question}</h3>

{/* option div  */}
<div>
{question[indexnumber].options.map((e,i)=>{
return (
<div key={i}>
{""}
<button className='editoptbtn' onClick={()=> checkans(e,question[indexnumber].answer)}>
{e}
</button>{""}
</div>
)
})}
</div>
      {/* option div end  */}
      </div>



}
</div>
      </header>
    </div>
  );
}

export default App;
