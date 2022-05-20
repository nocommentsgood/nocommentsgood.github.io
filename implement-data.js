/*function populateHeader(obj){
    const header = document.getElementById('careerstats');

}*/

async function populate(){
    // use this for pulling json from a remote host
    //const requestURL = 'https://github.com/AustinRice71/Lab-1/table-data.json';
    const requestURL = 'https://github.com/nocommentsgood/nocommentsgood.github.io/blob/main/table-data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const tableText = await response.text();
    
    const tableData = JSON.parse(tableText);
    populateTable(tableData);

    // use this for parsing json from local file (testing purposes)
    /*const mydata = JSON.parse(tableData);
    console.log(mydata);*/

    //populateTable(mydata);

}

function populateTable(data){
    const stats = data['statistics'];
    let keys = [];
    
    document.write("<table><tr>");
    for (keys in stats[0]){
        document.write('<td>' + keys + '</td>');
    }
    document.write("</tr>");
    for (var i = 0; i < stats.length; i ++){
        document.write('<tr>');
        for (keys in stats[i]){
            document.write('<td>' + stats[i][keys] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

    /*const table = document.createElement('table');
    const tableHeaderRow = document.createElement('tr');
    const tableHeader = document.createElement('th');*/
    
}

populate();