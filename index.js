function checkN(n)
{
	if (n < 2)    
        return 0;

    for (var i = 2; i <= Math.sqrt(n); i ++)
    {
        if (n%i===0)
        {
            return 0;
        }
    }
    return 1;
}
function ex(){
    var num = +  document.getElementById("txtNum").value;
    var string = '';
    for(var i = 0; i < num; i++)
	{
		if ( checkN(i) == 1 )
		{
            string = string + i + " ";
		}
	}
    document.getElementById("resultBt1").innerHTML = string;
    
}
