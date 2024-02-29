

let h2  = React.createElement('h2' ,{},'Topics Covered' )
let p1  = React.createElement('p1' ,{},'The following is a list of all the topics we cover in the MDN learning area.')
let a  = React.createElement('a' ,{href:"#"},'Getting started with the web' )
let link  = React.createElement('linked' ,{}, a )
let p2  = React.createElement('p' ,{},'Provides a practical introduction to web development for complete beginners.' )
let a1  = React.createElement('a' ,{href:'#'}, 'HTML — Structuring the web' )
let link1  = React.createElement('linked' ,{}, a1)
let p3  = React.createElement('p' ,{},'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.' )
let a2  = React.createElement('a' ,{href:"#"}, ' CSS-Styling the web' )
let link2  = React.createElement('linked' ,{}, a2)
let p4  = React.createElement('p' ,{},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS" )

let div  = React.createElement('div' ,{className:"outerDiv"}, [h2 ,p1 ,link,p2,link1,p3,link2,p4] )

ReactDOM.render(div,document.getElementById('root'))