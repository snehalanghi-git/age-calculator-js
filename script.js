function calculateAge() {
    const dob =document.getElementById('dob').value;
    const result=document.getElementById('result');

    if(!dob){
        result.innerHTML="Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.innerHTML=`Your age is ${age} years.`;
}