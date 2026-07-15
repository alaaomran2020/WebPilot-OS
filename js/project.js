
fetch("data/projects.json")

.then(response => response.json())

.then(projects => {


const container =
document.getElementById("projects");


projects.forEach(project=>{


container.innerHTML += `

<div class="card">

<h3>
${project.title}
</h3>


<p>
${project.description}
</p>


<strong>
الحالة:
${project.status}
</strong>


<br><br>


<a class="btn"
href="project.html?id=${project.id}">
التفاصيل
</a>


</div>

`;


});


})

.catch(error=>{

console.log(error);

});

