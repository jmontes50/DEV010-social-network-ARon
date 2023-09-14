function TimeLine(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionTimeLine');
  section.setAttribute('class', 'timeLineStyle');

  const logoTimeLine = document.createElement('img');
  logoTimeLine.setAttribute('id', 'logoTimeLine');
  logoTimeLine.setAttribute('class', 'timeLineLogo');
  logoTimeLine.setAttribute('src', './assets/logo256.png');

  const btnClose = document.createElement('img');
  btnClose.setAttribute('id', 'btnClose');
  btnClose.setAttribute('src', './assets/close.png');

  const sectionPosts = document.createElement('section');
  sectionPosts.setAttribute('id', 'sectionPosts');
  sectionPosts.setAttribute('class', 'postSection');

  section.append(logoTimeLine, btnClose, sectionPosts);
  return section;
}

export default TimeLine;
