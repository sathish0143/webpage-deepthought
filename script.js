//!fetch data from api

async function getapi() {
  // Storing response
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json",
    { Origin: "https://dev.deepthought.com" }
  );
  var data = await response.json();
  console.log(data);
  //descriptionCall(data);
  showCards(data);
  journy(data);
}
//! Calling that async function
getapi();

//!description

function descriptionCall(data) {}

function showCards(data) {
  const taskData = data.tasks[0];
  const taskid = document.getElementById("tasks-id");
  let tabval = `<h3>${taskData.task_title}</h3>
              <p>
                ${taskData.task_description}
              </p>`;
  taskid.innerHTML = tabval;

  const cardRounds = data.tasks[0].assets;
  console.log(cardRounds);

  let tab = "";
  for (let i = 0; i < cardRounds.length; i++) {
    console.log(cardRounds[i].asset_content_type);
    switch (cardRounds[i].asset_content_type) {
      //! card type 1
      case "video":
        if (cardRounds[i].asset_type == "display_asset") {
          tab += `<div class="video-card">
                <div class="head-div">
                    <h2>${cardRounds[i].asset_title}</h2>
                    <div><h1>i</h1></div>
                    
                </div>
                <div class="des-div">
                    <p><b>Description:</b>${cardRounds[i].asset_description}</p>
                </div>
                <div class="youtube">
                    <iframe src="${cardRounds[i].asset_content}"></iframe>
                </div>
            </div>`;
          document.getElementById("cards").innerHTML = tab;
        }
        break;
      //!card type 2
      case "threadbuilder":
        if (cardRounds[i].asset_type == "input_asset") {
          tab += `<div class="video-card">
              <div class="head-div">
                <h2>${cardRounds[i].asset_title}</h2>
                <div>
                  <h1>i</h1>
                </div>
              </div>
              <div class="des-div">
                <p>
                  <b>Description:</b>${cardRounds[i].asset_description}
                </p>
              </div>
              <div class="thread-div">
                <div class="thread-head">
                  <div class="arrow" id="arr-box"></div>
                  <h1>Thread A</h1>
                </div>
                <div class="sub-therad">
                  <div class="subtherad1">
                    <div>
                      <h3>sub therad 1</h3>
                      
                    </div>
                    <div class="input">
                      <input type="text" placeholder="Enter Text here" />
                    </div>
                  </div>
                  <div class="sunthread2">
                    <div>
                      <h3>Sub Interpretation 1</h3>
                      
                    </div>
                    <div class="input">
                      <input type="text" placeholder="Enter Text here" />
                    </div>
                  </div>
                </div>
                <div class="icon-div">
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 15 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z"
                      fill="#323232"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7727 2C21.7727 0.9 20.8382 0 19.6832 0H2.8832C1.7282 0 0.783203 0.9 0.783203 2V14C0.783203 15.1 1.7282 16 2.8832 16H17.5832L21.7832 20L21.7727 2ZM17.5832 12H4.9832V10H17.5832V12ZM17.5832 9H4.9832V7H17.5832V9ZM17.5832 6H4.9832V4H17.5832V6Z"
                      fill="#323232"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4499 0H3.11654C1.82154 0 0.783203 0.857143 0.783203 1.90476V15.2381C0.783203 16.2857 1.82154 17.1429 3.11654 17.1429H7.7832L11.2832 20L14.7832 17.1429H19.4499C20.7332 17.1429 21.7832 16.2857 21.7832 15.2381V1.90476C21.7832 0.857143 20.7332 0 19.4499 0ZM12.4499 15.2381H10.1165V13.3333H12.4499V15.2381ZM14.8649 7.85714L13.8148 8.73338C12.9748 9.42861 12.4499 10 12.4499 11.4286H10.1165V10.9524C10.1165 9.90476 10.6414 8.95242 11.4814 8.25718L12.9281 7.05718C13.3598 6.71432 13.6165 6.2381 13.6165 5.71429C13.6165 4.66667 12.5665 3.80952 11.2832 3.80952C9.99987 3.80952 8.94987 4.66667 8.94987 5.71429H6.61654C6.61654 3.60952 8.70487 1.90476 11.2832 1.90476C13.8615 1.90476 15.9499 3.60952 15.9499 5.71429C15.9499 6.55238 15.5299 7.31429 14.8649 7.85714Z"
                      fill="#323232"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4044 6.867C13.236 4.356 12.1786 1.908 10.1952 0C8.19305 1.926 7.08879 4.374 6.87361 6.867C8.07115 7.479 9.17535 8.27101 10.139 9.23401C11.1026 8.28001 12.2069 7.488 13.4044 6.867ZM7.32312 9.25203C7.19214 9.16203 7.04227 9.08099 6.90193 8.99099C7.04227 9.08999 7.19214 9.16203 7.32312 9.25203ZM13.3295 9.02703C13.2078 9.10803 13.0765 9.17103 12.9549 9.26103C13.0765 9.17103 13.2078 9.10803 13.3295 9.02703ZM10.139 12.105C8.1275 9.15296 4.69393 7.2 0.783203 7.2C0.783203 11.988 3.92655 16.038 8.29571 17.541C8.88512 17.748 9.50281 17.901 10.139 18C10.7752 17.892 11.3835 17.739 11.9823 17.541C16.3515 16.038 19.4948 11.988 19.4948 7.2C15.5841 7.2 12.1505 9.15296 10.139 12.105Z"
                      fill="#323232"
                    />
                  </svg>
                  <div class="category">
                    <h2>Select Categ</h2>
                    <div class="arrow"></div>
                  </div>
                  <div class="process">
                    <h2>Select Process</h2>
                    <div class="arrow"></div>
                  </div>
                </div>
                <div class="sub-btn">
                  <button>
                    <span>+</span> Sub-thread
                  </button>
                </div>
                <div class="sumary-div">
                  <div>
                    <h3>Summary for Thread A</h3>
                  </div>
                  <div class="input">
                    <input type="text" placeholder="Enter Text here" />
                  </div>
                </div>
              </div>
            </div>`;
          document.getElementById("cards").innerHTML = tab;
        }
        break;
      //!card type 3
      case "article":
        if (cardRounds[i].asset_type == "input_asset") {
          tab += `<div class="video-card">
              <div class="head-div">
                <h2>${cardRounds[i].asset_title}</h2>
                <div><h1>i</h1></div>
              </div>
              <div class="des-div">
                <p><b>Description:</b>${cardRounds[i].asset_description}</p>
              </div>
              <div class="title-div">
                <h2>Title</h2>
                <input type="text" />
              </div>
              <div class="con-div">
                <h2>Content</h2>
                <div class="container">
                <div class="page">
                  <h3>File</h3>
                  <h3>Edit</h3>
                  <h3>View</h3>
                  <h3>Insert</h3>
                  <h3>Format</h3>
                  <h3>Tools</h3>
                  <h3>Table</h3>
                  <h3>Help</h3>
                </div>
                
                <div class="options">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79978 1.1501L1.15002 5.13561M1.15002 5.13561L5.79978 9.12111M1.15002 5.13561L11.85 5.13561C14.0592 5.13561 15.85 6.92647 15.85 9.13561L15.85 12.8501"
                      stroke="#616161"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9431 1.32505L15.15 5.53197M15.15 5.53197L10.9431 9.7389M15.15 5.53197H5.85003C3.64089 5.53197 1.85003 7.32284 1.85003 9.53197V13.675"
                      stroke="#616161"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004"
                      stroke="#616161"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h3>Paragraph</h3>
                  <h1>...</h1>
                </div>
                </div>
                <div class="emp-con"></div>
              </div>
            </div>`;
          document.getElementById("cards").innerHTML = tab;
        }
        //!card type 4
        else if (cardRounds[i].asset_type == "display_asset") {
          tab += `<div class="video-card">
                <div class="head-div">
                    <h2>${cardRounds[i].asset_title}</h2>
                    <div><h1>i</h1></div>
                    
                </div>
                <div class="des-div">
                    <p><b>Description:</b>${cardRounds[i].asset_description}</p>
                </div>
                <div class="embed-div">
                <embed class="embed" src="https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878" style="width:100%; height: 500px ; ">
                </div>
            </div>`;
          document.getElementById("cards").innerHTML = tab;
        }
        break;
      //!card not defined
      default:
        console.log("type of card not defined");
    }
  }
}

function journy(data) {
  const noticeData = data.tasks[0].assets;
  const list = document.getElementById("list");
  const description = `<div class="list">
              <h3 class="li-h3">${data.tasks[0].task_title}</h3>
              <div class="box"><h1>${data.tasks.length}</h1></div>
            </div>`;
  list.innerHTML += description;

  for (let j = 0; j < noticeData.length; j++) {
    const heading = `<li><h1>.</h1><h6>${noticeData[j].asset_title}</h6></li>`;
    list.innerHTML += heading;
  }
}
