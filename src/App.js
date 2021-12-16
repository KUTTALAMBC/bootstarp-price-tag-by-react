import logo from './logo.svg';
import './App.css';
import PriceCard from './PriceCard';


function App() {
      let PriceList=[
      {
        plan:"FREE",
        price: 0,
        currency:"$",
        features:[
          {
            name : "Single User",
            enable : true
         },
         {
          name : "5GB Storage",
          enable : true
       },
       {
        name : "Unlimited Public Projects",
        enable : true
     },
     {
      name : "Community Access",
      enable : true
   },
   {
    name : "Unlimited Private Projects",
    enable : false
 },
 {
  name : "Dedicated Phone Support",
  enable : false
},
{
  name : "Free Subdomain",
  enable : false
},
{
  name : "Monthly Status Reports",
  enable : false
},
        ]

      },
      {
        plan : "PLUS",
        price: 20,
        currency:"$",
        features:[
          {
            name : "5 User",
            enable : true,
            isstrong : true
         },
         {
          name : "50GB Storage",
          enable : true
       },
       {
        name : "Unlimited Public Projects",
        enable : true
     },
     {
      name : "Community Access",
      enable : true
   },
   {
    name : "Unlimited Private Projects",
    enable : true
 },
 {
  name : "Dedicated Phone Support",
  enable : true
},
{
  name : "Free Subdomain",
  enable : true
},
{
  name : "Monthly Status Reports",
  enable : false
},
        ]

      },
      {
        plan : "PRO",
        price:30,
        currency:"$",
        features:[
          {
            name : "UNLIMITED",
            enable : true,
            isstrong: true
         },
         {
          name : "150GB Storage",
          enable : true
       },
       {
        name : "Unlimited Public Projects",
        enable : true
        
     },
     {
      name : "Community Access",
      enable : true
   },
   {
    name : "Unlimited Private Projects",
    enable : true
 },
 {
  name : "Dedicated Phone Support",
  enable : true
},
{
  name : "Free Subdomain",
  enable : true
},
{
  name : "Monthly Status Reports",
  enable : true
},
        ],

      },
    ];
  return (
    
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
         PriceList.map(obj =><PriceCard data={obj}></PriceCard>)

      }
      
      
      </div>
    </div>
    </section>
  );
}

export default App;
