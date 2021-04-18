function covid(){
    let countryName=document.getElementById("cname").value;
    let url="https://api.covid19api.com/country/"+countryName;
    fetch(url).then((res) => {
        return res.json()
    }).then((data)=>
    {
        let table=document.createElement("TABLE");
        table.border="1";
        table.width="500";
        table.align="center";

        row=table.insertRow(-1)
        cell1=row.insertCell(-1)
        cell2=row.insertCell(-1)
        cell3=row.insertCell(-1)
        cell4=row.insertCell(-1)
        cell5=row.insertCell(-1)

        cell1.innerHTML="Sno."
        cell2.innerHTML="Date"
        cell3.innerHTML="Active_Cases"
        cell4.innerHTML="Death"
        cell5.innerHTML="Recovered"
    
        data.forEach((ele)=>{
            
          row1=table.insertRow(-1)
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)
          cell4=row1.insertCell(-1)
          cell5=row1.insertCell(-1)
    
          cell1.innerHTML=data.indexOf(ele)+1
          cell2.innerHTML=ele.Date
          cell3.innerHTML=ele.Active
          cell4.innerHTML=ele.Deaths
          cell5.innerHTML=ele.Recovered
          })
        var div=document.getElementById("data");
        div.append(table); 
        
    })
       
    
    }