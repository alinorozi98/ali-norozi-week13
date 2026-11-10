import "./tabs.css"
function Tabs({counter,setCounter}) {
    
    function showHandler1(){
        setCounter("Javascript")   
    }
    function showHandler2(){
        setCounter("Php")
    }
    function showHandler3(){
        setCounter("Python")
    }
    function showHandler4(){
        setCounter("Java")
    }
      const language = [{name : "Javascript", id :1 ,show : showHandler1},
                        {name : "Php", id : 2, show : showHandler2},
                        {name:"Python", id : 3, show : showHandler3},
                        {name : "Java", id : 4, show : showHandler4},
                        ]    
       const selected = {
        color:"yellow",
         borderBottom:"2px solid yellow",
    };
      const styled = {
        color:"white",
        
    };                               
  return (
    <div className="tabs">
        {
            language.map((item)=><p key={item.id}onClick={item.show} style={counter===item.name ? selected : styled}>{item.name}</p>)
        }
    </div>
  )
}

export default Tabs