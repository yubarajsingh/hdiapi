
var data

const tab=document.getElementById('tableBody');
function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }

const calling =async()=>{
    let tableBody = '';
    const response= await fetch('https://hdiapi.azurewebsites.net/list/')
    data= await response.json()
    
    
    data.slice(-10).reverse().forEach(da=>{
       let date=toTimestamp(da.date)
        
        
       tableBody+= `<tr scope="row">                                  
        <td>
          ${da.id}
        </td>
        <td> ${da.qr}</td>
        <td>
        ${da.date}
        
        </td>        
        </tr>`

    })

    tab.innerHTML=tableBody
    
}

setInterval(calling,1000)
