/*
  讀取 projects.js 的 window.TEACHING_PROJECTS，畫出教具卡片。
  新增教具請改 projects.js，不必改這個檔案。
*/
(function () {
  var STATUS_CLASS = {
    "上線中": "is-live",
    "開發中": "is-wip",
    "網址待補": "is-pending"
  };

  var catalog = document.getElementById("catalog");
  var countEl = document.getElementById("tool-count");
  var errorEl = document.getElementById("catalog-error");
  var projects = window.TEACHING_PROJECTS;
  var errors = [];

  if (!Array.isArray(projects)) {
    projects = [];
    errors.push("讀不到教具清單。請確認 projects.js 有設定 window.TEACHING_PROJECTS，而且是一個陣列。");
  }

  function blank(value) {
    return value == null || String(value).trim() === "";
  }

  function httpUrl(value) {
    try {
      var url = new URL(String(value).trim());
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (err) {
      return false;
    }
  }

  function linkField(project, field) {
    var value = project[field];
    if (blank(value)) return "";
    var text = String(value).trim();
    if (!httpUrl(text)) {
      errors.push("「" + (project.name || "未命名") + "」的 " + field + " 不是 http 或 https 網址，這一格不做成連結。");
      return "";
    }
    return text;
  }

  function versionText(value) {
    if (blank(value)) return "未定";
    var text = String(value).trim();
    if (/^v/i.test(text)) return text;
    return "v" + text;
  }

  function addText(parent, tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    parent.appendChild(el);
    return el;
  }

  function addLink(parent, className, href, label) {
    var link = document.createElement("a");
    link.className = className;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    parent.appendChild(link);
    return link;
  }

  function addPlaceholder(parent, className, label) {
    var el = document.createElement("span");
    el.className = className + " is-disabled";
    el.textContent = label;
    parent.appendChild(el);
    return el;
  }

  projects.forEach(function (project, index) {
    var place = "第 " + (index + 1) + " 筆";
    if (!project || typeof project !== "object" || Array.isArray(project)) {
      errors.push(place + "不是一筆教具資料。");
      return;
    }

    var name = blank(project.name) ? "" : String(project.name).trim();
    var summary = blank(project.summary) ? "" : String(project.summary).trim();
    var status = blank(project.status) ? "未標示" : String(project.status).trim();
    if (!name) errors.push(place + "缺少 name。");
    if (!summary) errors.push(place + "缺少 summary。");

    var siteUrl = linkField(project, "url");
    var sourceUrl = linkField(project, "source");
    var card = document.createElement("article");
    card.className = "card " + (STATUS_CLASS[status] || "is-other");
    if (siteUrl) card.classList.add("has-site");
    card.id = "project-" + (index + 1);

    var top = document.createElement("div");
    top.className = "card-top";
    var statusEl = addText(top, "p", "status", status);
    statusEl.setAttribute("aria-label", "狀態：" + status);
    card.appendChild(top);

    var title = document.createElement("h2");
    title.className = "card-title";
    if (siteUrl) {
      var titleLink = addLink(title, "card-open", siteUrl, name || "未命名教具");
      titleLink.setAttribute("aria-label", (name || "未命名教具") + "，開啟網站");
    } else {
      title.textContent = name || "未命名教具";
    }
    card.appendChild(title);

    addText(card, "p", "summary", summary || "尚未填寫用途。");

    var version = document.createElement("p");
    version.className = "version";
    version.appendChild(document.createTextNode("版本 "));
    addText(version, "strong", "", versionText(project.version));
    card.appendChild(version);

    var actions = document.createElement("div");
    actions.className = "actions";
    if (siteUrl) {
      addLink(actions, "action action-open", siteUrl, "開啟網站");
    } else {
      addPlaceholder(actions, "action action-open", "網址待補");
    }
    var teacherUrl = linkField(project, "teacher");
    if (teacherUrl) addLink(actions, "action action-open", teacherUrl, "教師入口");
    if (sourceUrl) {
      addLink(actions, "action action-source", sourceUrl, "原始碼");
    } else {
      addPlaceholder(actions, "action action-source", "原始碼待補");
    }
    card.appendChild(actions);
    catalog.appendChild(card);
  });

  var shown = catalog.querySelectorAll(".card").length;
  countEl.textContent = shown === 0 ? "目前沒有教具卡片" : "共 " + shown + " 項教具";

  if (errors.length) {
    errorEl.hidden = false;
    errorEl.textContent = "";
    addText(errorEl, "strong", "", "資料需要修正");
    var list = document.createElement("ul");
    errors.forEach(function (message) {
      addText(list, "li", "", message);
    });
    errorEl.appendChild(list);
  }
})();
