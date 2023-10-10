import React from 'react';
export default function Registration()
 {
    
   

    return(
        <div>
            <center>
                <h1 style={{color:"red"}}>Registration Form</h1>
                <form method="" name="reg_form" onsubmit="return validate()">
<table align="center" border="0">
<tr>
<td><b>Enter first name :</b></td>
<td>  <input type="text" name="fname" placeholder="first name"/></td>
</tr>
<tr>
<td><b>Enter last name :</b></td>
<td>  <input type="text" name="lname" placeholder="last name"/></td>
</tr>
<tr>
<td><b>Address :</b></td>
<td>  <input type="textarea" name="address" placeholder="address" /></td>
</tr>                                                                                                                      
<tr>
<td><b>Gender :</b></td>
<td>  <input type="radio" name="gender"  value="male" />male
      <input type="radio" name="gender"  value="male" />female
</td>
</tr>
<tr>
<td><b>Email:</b></td>
<td>  <input type="email" name="email" placeholder="example@gmail.com"/></td>
</tr>
<tr>
<td><b>Mobile:</b></td>
<td>  <input type="text" name="mobile" placeholder="mobile number"/></td>
</tr>
<tr>
<td><b>Course:</b></td>
<td>  <select name="couse">
     <option value="select course" >select course </option>
      <option value="html" >html </option>
      <option value="css" >css </option>
    <option value="java script" >java script </option>
     <option value="java" >java </option>
     </select>
</td>
</tr>
<tr>
<td><input style={{width:"150px"}} type="submit" name="submit" value="submit" /></td>
<td><input style={{width:"150px"}} type="reset" name="reset" value="reset" /></td>
</tr>
</table>
</form>

            </center>
        </div>
    ) 
 }