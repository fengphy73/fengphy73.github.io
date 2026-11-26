/*
  Phy 老師教具入口的唯一資料檔。
  新增一張卡片：複製下面陣列的最後一筆，改成新教具的內容，存檔後重新整理 index.html。
  欄位說明見 README.md。

  url 或 source 還沒有就留空字串 ""。
  不要填 "#"、"javascript:" 或任何假網址。
*/
window.TEACHING_PROJECTS = [
  {
    name: "風機葉片與壓模設計器",
    summary: "產生風機葉片上下壓模與完整葉片 STL、雷切 SVG，含鳩尾分段接縫。",
    version: "1.2.2",
    status: "上線中",
    url: "https://fengphy73.github.io/blade-mold-designer/",
    source: "https://github.com/fengphy73/blade-mold-designer"
  },
  {
    name: "出水口接水收納架設計器",
    summary: "調整尺寸並預覽組裝，下載熱水瓶出水口下方的外殼、格柵蓋、集水盒與收納抽屜 STL。",
    version: "1.0",
    status: "上線中",
    url: "https://fengphy73.github.io/water-tray-designer/",
    source: "https://github.com/fengphy73/water-tray-designer"
  },
  {
    name: "雷切支架產生器",
    summary: "產生雷射切割用的支架；網站網址尚未確定。",
    version: "",
    status: "製作中",
    url: "",
    source: ""
  },
  {
    name: "狹縫干涉繞射實驗紀錄",
    summary: "課堂實驗紀錄網站（試用）。學生填量測、核對波長；老師可從「教師入口」設定並產生專屬學生連結。",
    version: "",
    status: "試用",
    url: "https://fengphy73.github.io/slit-lab-log/",
    teacher: "https://fengphy73.github.io/slit-lab-log/teacher.html",
    source: "https://github.com/fengphy73/slit-lab-log"
  },
  {
    name: "雷射光架設計器",
    summary: "單狹縫／雙狹縫干涉繞射實驗的雷射夾座、狹縫片夾座與 A4 屏幕架，可 3D 預覽並輸出 STL。",
    version: "",
    status: "上線中",
    url: "https://fengphy73.github.io/laser-slit-stand/",
    source: "https://github.com/fengphy73/laser-slit-stand"
  },
  {
    name: "風力齒輪設計室",
    summary: "為風力發電實作設計直齒輪、六角孔、輪轂與擋板，可 3D、2D 預覽並輸出 STL。",
    version: "",
    status: "上線中",
    url: "https://fengphy73.github.io/wind-gear-studio/",
    source: "https://github.com/fengphy73/wind-gear-studio"
  },
  {
    name: "風力發電底座支架設計器",
    summary: "KidWind 2026 亞洲聯賽方案 D 的雷切方形空心柱底座支架，可 3D 預覽、規則檢核，並輸出雷切 SVG 與列印 STL。",
    version: "",
    status: "上線中",
    url: "https://fengphy73.github.io/wind-stand-designer/",
    source: "https://github.com/fengphy73/wind-stand-designer"
  },
  {
    name: "風力發電教具總站",
    summary: "風力發電教具入口，串連葉片、齒輪與底座設計器，並有接口對照、組裝關係與 KidWind 2026 檢核。",
    version: "",
    status: "上線中",
    url: "https://fengphy73.github.io/wind-teaching-kit/",
    source: "https://github.com/fengphy73/wind-teaching-kit"
  }
];
