let input = document.getElementById('text1');
let ShowPost = document.getElementById('topic1');
let i = 1;

function PostFunc()
{
    let text =  input.value;
    if(i == 1 && text != '')
    {
        document.getElementById('topic1').innerHTML = text;
        i++;
    }
    else if(i == 2 && text != '')
    {
        document.getElementById('comment1').innerHTML = text;
        i++;
    }
    else if(i == 3 && text != '')
    {
        document.getElementById('comment2').innerHTML = text;
        i++;
    }
    else if(i > 3 && text != '')
    {
        alert("You can't post ,your Memmo is full.");
    }
    else
    {
       if(text == '')
       {
           alert("pls put information");
       } 
    }

    document.getElementById('text1').value = '';
}

function ClearFunc()
{
    document.getElementById('topic1').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    document.getElementById('text1').value = '';
    i = 1;
}