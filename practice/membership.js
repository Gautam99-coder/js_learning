//discount eligibility checker
const customer =1000;
const discount = 0.1;
const isMember = true;
const isEligible = customer >=1000 && discount && isMember;
if (isEligible) {
    console.log("You are eligible for a discount.");
    after_discount = customer - (customer * discount);
    console.log("Your total after discount is: " + after_discount);
}
else {
    console.log("You are not eligible for a discount.");
}
// The customer is not eligible for a discount because they are not a member.