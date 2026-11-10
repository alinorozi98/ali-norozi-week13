

function Content({data}) {
   if(data === "Javascript"){
        return(
            <div className="content"> 
                <h4>Javascript</h4>
                <p>JavaScript is one of the most popular programming languages in the world It is used to create dynamic and interactive websites With JavaScript, you can add functionality to buttons, images, and forms Along with HTML and CSS, it is one of the three main technologies of web development JavaScript can run in different web browsers, such as Chrome and Firefox It can also be used to create games, applications, and server-side programs Learning JavaScript helps you build professional and user-friendly websites.</p>
               <img src="/javascript.png" alt="" className="image" />
            </div>
        )
    }else if(data === "Php"){
        return(
        
            <div className="content">
                <h4>Php</h4>
                <p>PHP is a popular programming language used for web development It is mainly used to create dynamic and interactive websites PHP runs on the server and processes data before sending it to the browser It can connect to databases such as MySQL PHP is commonly used to build login systems and online stores It works well with HTML, CSS, and JavaScript Learning PHP helps you develop powerful and functional websites.</p>
                <img src="/php.png" alt="" className="image" />
            </div>  
        )
    }else if(data === "Python"){
        return(
            <div className="content">
                <h4>Python</h4>
                <p>Python is one of the most popular and widely used programming languages in the world Python is easy to learn because of its simple syntax and readability It is used for web development and software creation Python is widely used in artificial intelligence and machine learning It is also used for data analysis and scientific calculations Python has many useful and powerful libraries Learning Python helps you create professional and useful applications.</p>
                <img src="/python.png" alt="" className="image" />
            </div>
        )
    }else if(data === "Java"){
        return(
            <div className="content">
                <h4>Java</h4>
                <p>Java is one of the most popular and powerful programming languages in the world Java is used to develop software and applications It is widely used for developing Android applications Java is an object-oriented programming language It can run on different operating systems, such as Windows and Linux Java is widely used in large projects because of its security and stability Learning Java helps you create professional and useful software.</p>
                <img src="/java.png" alt="" className="image" />
            </div>
        )
    }
}

export default Content