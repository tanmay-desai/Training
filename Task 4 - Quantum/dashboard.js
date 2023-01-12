import { data } from "./data.js"

const cardContainer = document.querySelector(".cards")

const cardHTML =
    `${data.map((data) => {
        return (
            `<div class="card-item">
        <div class="star ${data.star ? `` : `star-disabled`}"><img src="./icons/favourite.svg" alt="" /></div>
        <div class="card-details">
          <div class="card-image">
            <img src=${data.imageSrc} alt="" />
          </div>
          <div class="card-text">
            <p class="text-title">
              ${data.title}
            </p>
            <div class="flex-row" style="margin-top: 7px">
              ${data.subject}
              <div class="divi"></div>
              ${data.grade}<span style="color: #1f7a54; margin-left: 2px">${data.gPlus}</span>
            </div>
            ${data.isExpired ? `` : `<div class="flex-row">
            <div class="bold">${data.units}</div>
            Units
            <div class="bold">${data.lessons}</div>
            Lessons
            <div class="bold">${data.topics}</div>
            Topics
          </div>`}
            <div class="custom-select card-select ${data.isDisabled ? `disabled` : ""}">
              <select ${data.isDisabled ? `disabled` : ""}>
                <option value="1">${data.selectOptions[0]}</option>
                <option value="1">${data.selectOptions[1]}</option>
                <option value="1">${data.selectOptions[2]}</option>
              </select>
            </div>
            <div class="flex-row">
                <p style="margin-right: 17px">${data.numberOfStudents ? `${data.numberOfStudents} Students` : ''}</p>
                <p>${data.date}</p>
            </div>
            <div class="flex-row"></div>
            ${data.isExpired ?
                `<div class="expired">expired</div>` : ''}
          </div>
        </div>
        <div class="card-divider"></div>
        <div class="card-icons">
          <img src="./assets/icons/preview.svg" alt="" style="height: 24px" />
          <img src="./assets/icons/manage course.svg" alt=""  />
          <img src="./assets/icons/grade submissions.svg" alt=""  />
          <img src="./assets/icons/reports.svg" alt="" style="height: 24px" />
        </div>
        </div>`)
    }).join("\n")}`

cardContainer.innerHTML = cardHTML
//console.log(cardHTML)