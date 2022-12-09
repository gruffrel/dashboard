
// gets a json payload back from asana and calls the provided function

function get(path,key,f) {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://app.asana.com/api/1.0/"+path);
  xhr.setRequestHeader("Authorization","Bearer "+key)
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {

  if (xhr.readyState == 4 && xhr.status == 200) {
      const resp = xhr.response;
      const data=resp.data
      f(data)
    }
  };

}

// callback wrapper for getting a task by gid
function getTask(key,gid,f) {
      get("tasks/"+gid,key,f);
}

// callback wrapper to get all tasks for a project
function getProjectTasks(key,pid,f) {
    get("projects/"+pid+"/tasks",key,f);
}
