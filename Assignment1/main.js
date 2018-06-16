// Function for displaying the course info based on user selection
function displayCourses() {
    "use strict";
    var education = document.getElementById("education_select").value;
    var career = document.getElementById("career_select").value;
    if (education === "Bachelor" && career === "CS") {
        document.getElementById("course_info").innerHTML = `
            <tr>
                <td>
                    <a href="./Reg_CS.html">CS 100</a>
                </td>
                <td>Dr.X</td>
                <td>MATH 110</td>
                <td>3</td>
                <td>Sunday from 10:00 A.M. to 1:00 P.M.</td>
            </tr>
        `;
    } else if (education === "Bachelor" && career === "Chemistry") {
        document.getElementById("course_info").innerHTML = `
            <tr>
                <td>
                    <a href="./Reg_Chemistry.html">CHEM 100</a>
                </td>
                <td>Dr.Y</td>
                <td>None</td>
                <td>3</td>
                <td>Monday from 8:00 A.M. to 9:45 A.M.</td>
            </tr>
        `;
    } else {
        document.getElementById("course_info").innerHTML = `
            <tr>
                <td>
                    <a href="./Reg_Com.html">COMM 105</a>
                </td>
                <td>Dr.Z</td>
                <td>None</td>
                <td>3</td>
                <td>Saturday from 2:00 P.M. to 05:00 P.M.</td>
            </tr>
        `;
    }
}

// Function for registering the class
function register() {
    "use strict";
    var total = parseInt(document.getElementById("total").innerText);
    var available = parseInt(document.getElementById("available").innerText);
    if (available !== 0) {
        document.getElementById("available").innerHTML = available - 1;
        document.getElementById("total").innerHTML = total + 1;
        document.getElementById("success").style.visibility = "visible";
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("success").style.visibility = "hidden";
        document.getElementById("success").style.display = "none";
        document.getElementById("fail").style.visibility = "visible";
        document.getElementById("fail").style.display = "block";
    }
}