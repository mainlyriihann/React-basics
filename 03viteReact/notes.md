
Ab React virtual dom nhi use krta, pehle krta tha.
basically jo createRoot() tha ye Dom like structure create krta hai{ jaise browser mein hota hai}. Fir ye virtual aur real dom mein comparison hota hai aur changes hote hain, Browser poore dom ko firse repaint krta hai(page reload).

Kuch element maanlo network pe dependant hai, aur uspe baar baar update aarhe, toh kuch Algo lagake saare update ek saath krlete. => Har UI ko instantaneously update krna zaroori nhi hai.

Github-> react-fibre-architecture
{
  key features: ability to pause, abort , or reuse work as new updates come in: ability to assign priority to different types of updates =(Hydration)

     Reconciliation: recursive algorithm in react which reconsiders -> diffing one tree with another to determine which part needs to be updated.
     Actuall yyahi vo algo hai jisko log virtual dom samajhte hain.

     update: A change in the data used to render React App, Usually a result of 'setState'.
    react Api's central idea is to think of udpates as if they cause the entire app to re-render. This allows developer to reason declaratively, rather than worry about how to efficiently transition app from one state to another.

    Fibre is a ground up rewrite of The Reconciler, Key points are: 
    -> Diff component types are assumed to generate substantially different trees. React will not attempt to Diff them, rather replace the iold tree completely.
    ***-> Diffing of lists is performed using keys.
    Keys should be "stable , predictable, and unique" 

    Functionality of Fibre:
    1) Pause Work and come back to it later.
    2) Assign priority to different types of work.
    3) Reuse previously Completed work.
    4)abort work if its not longer needed.
}