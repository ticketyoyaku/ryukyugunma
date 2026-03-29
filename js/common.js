/**
 * common.js - 全ページ共通のJavaScript
 */

document.addEventListener('DOMContentLoaded', function() {

  var f  = SITE_DATA.festival;
  var pg = SITE_DATA.pages || {};
  var sns = f.sns || {};

  // ベースパス判定
  function getBase(el) {
    return (el && el.dataset.page === 'top') ? '' : '../';
  }

  /* ━━━ ヘッダー生成 ━━━ */
  var headerEl = document.getElementById('site-header');
  if (headerEl) {
    var isTop = headerEl.dataset.page === 'top';
    var base  = getBase(headerEl);
    var currentFile = location.pathname.split('/').pop() || 'index.html';

    var navItems = [
      { key:'news',     label:'NEWS',      file:'news.html' },
      { key:'lineup',   label:'ARTIST',    file:'lineup.html' },
      { key:'schedule', label:'TIMETABLE', file:'schedule.html' },
      { key:'ticket',   label:'TICKET',    file:'ticket.html' },
      { key:'food',     label:'FOOD',      file:'food.html' },
      { key:'goods',    label:'GOODS',     file:'goods.html' },
      { key:'sponsor',  label:'SPONSOR',   file:'sponsor.html' },
      { key:'access',   label:'ACCESS',    file:'access.html' },
    ].filter(function(l){ return pg[l.key] !== false; });

    // ヘッダー内側
    var inner = document.createElement('div');
    inner.className = 'header-inner';

    // ロゴ
    var logo = document.createElement('a');
    logo.href = base + 'index.html';
    logo.className = 'header-logo';
    var logoImg = document.createElement('img');
    logoImg.src = base + 'images/icon.png';
    logoImg.alt = '琉球の風';
    logoImg.className = 'header-logo-img';
    logoImg.addEventListener('error', function(){ this.style.display='none'; });
    var logoText = document.createElement('span');
    logoText.className = 'header-logo-text';
    logoText.textContent = 'RYUKYU NO KAZE';
    logo.appendChild(logoImg);
    logo.appendChild(logoText);
    inner.appendChild(logo);

    // ナビ（トップ以外）
    if (!isTop) {
      var nav = document.createElement('nav');
      nav.className = 'header-nav';
      var homeA = document.createElement('a');
      homeA.href = base + 'index.html';
      homeA.textContent = 'HOME';
      if (currentFile === 'index.html') homeA.className = 'active';
      nav.appendChild(homeA);
      navItems.forEach(function(l) {
        var a = document.createElement('a');
        a.href = base + 'pages/' + l.file;
        a.textContent = l.label;
        if (currentFile === l.file) a.className = 'active';
        nav.appendChild(a);
      });
      inner.appendChild(nav);
    }

    // ハンバーガー
    var ham = document.createElement('button');
    ham.className = 'hamburger';
    ham.id = 'hamburger';
    ham.setAttribute('aria-label', 'メニュー');
    ham.innerHTML = '<span></span><span></span><span></span>';
    inner.appendChild(ham);

    headerEl.appendChild(inner);
  }

  /* ━━━ モバイルメニュー生成 ━━━ */
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    var isTopM = (headerEl && headerEl.dataset.page === 'top');
    var baseM  = isTopM ? '' : '../';
    var allMobile = [
      { key:'',         label:'🏠 HOME',      href:'index.html',          isHome:true },
      { key:'news',     label:'📰 NEWS',       href:'pages/news.html' },
      { key:'lineup',   label:'🎤 ARTIST',     href:'pages/lineup.html' },
      { key:'schedule', label:'📋 TIMETABLE',  href:'pages/schedule.html' },
      { key:'ticket',   label:'🎟️ TICKET',    href:'pages/ticket.html' },
      { key:'food',     label:'🥢 FOOD',       href:'pages/food.html' },
      { key:'goods',    label:'👕 GOODS',       href:'pages/goods.html' },
      { key:'sponsor',  label:'🤝 SPONSOR',    href:'pages/sponsor.html' },
      { key:'access',   label:'🗺️ ACCESS',     href:'pages/access.html' },
    ].filter(function(l){ return l.isHome || pg[l.key] !== false; });

    allMobile.forEach(function(l) {
      var a = document.createElement('a');
      a.href = baseM + l.href;
      a.textContent = l.label;
      mobileMenu.appendChild(a);
    });
  }

  /* ━━━ ハンバーガー動作 ━━━ */
  document.addEventListener('click', function(e) {
    var ham  = document.getElementById('hamburger');
    var menu = document.getElementById('mobile-menu');
    if (!ham || !menu) return;
    if (e.target === ham || ham.contains(e.target)) {
      ham.classList.toggle('open');
      menu.classList.toggle('open');
    } else if (!menu.contains(e.target)) {
      ham.classList.remove('open');
      menu.classList.remove('open');
    }
  });

  /* ━━━ スクロールでヘッダーに影 ━━━ */
  window.addEventListener('scroll', function() {
    var h = document.getElementById('site-header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ━━━ フッター生成 ━━━ */
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    var baseF = getBase(footerEl);

    var inner = document.createElement('div');
    inner.className = 'footer-inner';

    // 上部：シーサー＋ブランド
    var top = document.createElement('div');
    top.className = 'footer-top';

    var shisaImg = document.createElement('img');
    shisaImg.src = baseF + 'images/シーサー1.png';
    shisaImg.alt = 'シーサー';
    shisaImg.className = 'footer-shisa-img';
    shisaImg.addEventListener('error', function(){ this.style.display='none'; });
    top.appendChild(shisaImg);

    
    var brand = document.createElement('div');
    brand.className = 'footer-brand';
    brand.innerHTML =
      '<div class="footer-brand-name">RYUKYU NO KAZE</div>' +
      '<div class="footer-brand-sub">' + (f.nameSub||'') + '</div>';

    // SNSボタン
    var snsWrap = document.createElement('div');
    snsWrap.className = 'footer-sns';
    if (sns.instagram) {
      var igBtn = document.createElement('a');
      igBtn.href = sns.instagram; igBtn.target = '_blank'; igBtn.rel = 'noopener';
      igBtn.className = 'footer-sns-btn';
      var igImg = document.createElement('img');
      igImg.src = baseF + 'images/instagram-icon.png'; igImg.alt = 'Instagram';
      igImg.style.width = '18px'; igImg.style.height = '18px'; igImg.style.objectFit = 'contain';
      igImg.addEventListener('error', function(){ this.parentNode.textContent = '📸'; });
      igBtn.appendChild(igImg); snsWrap.appendChild(igBtn);
    }
    if (sns.line) {
      var lineBtn = document.createElement('a');
      lineBtn.href = sns.line; lineBtn.target = '_blank'; lineBtn.rel = 'noopener';
      lineBtn.className = 'footer-sns-btn';
      var lineImg = document.createElement('img');
      lineImg.src = baseF + 'images/lineicon.png'; lineImg.alt = 'LINE';
      lineImg.style.width = '18px'; lineImg.style.height = '18px'; lineImg.style.objectFit = 'contain';
      lineImg.addEventListener('error', function(){ this.parentNode.textContent = '💬'; });
      lineBtn.appendChild(lineImg); snsWrap.appendChild(lineBtn);
    }
    brand.appendChild(snsWrap);
    top.appendChild(brand);
    inner.appendChild(top);

    var shisaImg = document.createElement('img');
    shisaImg.src = baseF + 'images/シーサー2.png';
    shisaImg.alt = 'シーサー';
    shisaImg.className = 'footer-shisa-img';
    shisaImg.addEventListener('error', function(){ this.style.display='none'; });
    top.appendChild(shisaImg);

    // フッターナビ
    var fnav = document.createElement('nav');
    fnav.className = 'footer-nav';
    var footerLinks = [
      { href:'index.html',            text:'HOME' },
      { href:'pages/news.html',       text:'ニュース' },
      { href:'pages/lineup.html',     text:'出演アーティスト' },
      { href:'pages/schedule.html',   text:'タイムテーブル' },
      { href:'pages/ticket.html',     text:'チケット' },
      { href:'pages/food.html',       text:'飲食・出店' },
      { href:'pages/goods.html',      text:'グッズ' },
      { href:'pages/sponsor.html',    text:'スポンサー' },
      { href:'pages/access.html',     text:'アクセス' },
      { href:'pages/privacy.html',    text:'プライバシーポリシー' },
      { href:'pages/terms.html',      text:'利用規約' },
    ];
    footerLinks.forEach(function(l) {
      var a = document.createElement('a');
      a.href = baseF + l.href; a.textContent = l.text;
      fnav.appendChild(a);
    });
    if (f.contact) {
      var contactA = document.createElement('a');
      contactA.href = 'mailto:' + f.contact; contactA.textContent = 'お問い合わせ';
      fnav.appendChild(contactA);
    }
    inner.appendChild(fnav);

    var copy = document.createElement('div');
    copy.className = 'footer-copy';
    copy.textContent = '© 2026 ' + (f.organizer||'琉球の風実行委員会') + ' All Rights Reserved.';
    inner.appendChild(copy);

    footerEl.appendChild(inner);
  }

  /* ━━━ カルーセル ━━━ */
  window.initCarousel = function(opts) {
    var track  = document.getElementById(opts.trackId);
    var prev   = document.getElementById(opts.prevId);
    var next   = document.getElementById(opts.nextId);
    var dotsEl = document.getElementById(opts.dotsId);
    if (!track || !track.children.length) return;

    var total   = track.children.length;
    var current = 0;

    function getPerView() {
      if (window.innerWidth < 600)  return 1;
      if (window.innerWidth < 960)  return Math.min(2, opts.perView||3);
      return opts.perView || 3;
    }
    function getMax() { return Math.max(0, total - getPerView()); }

    function setWidth() {
      var pv = getPerView();
      var w  = (100 / pv) + '%';
      Array.from(track.children).forEach(function(el) {
        el.style.flex = '0 0 ' + w;
        el.style.maxWidth = w;
      });
      current = Math.min(current, getMax());
      update();
    }

    function update() {
      var itemW = track.parentElement.offsetWidth / getPerView();
      track.style.transform = 'translateX(-' + (current * itemW) + 'px)';
      if (dotsEl) Array.from(dotsEl.children).forEach(function(d,i){ d.classList.toggle('active', i===current); });
      if (prev) prev.disabled = current === 0;
      if (next) next.disabled = current >= getMax();
    }

    if (dotsEl) {
      for (var i = 0; i < total; i++) {
        var d = document.createElement('button');
        d.className = 'carousel-dot' + (i===0?' active':'');
        (function(idx){ d.addEventListener('click', function(){ current=idx; update(); }); })(i);
        dotsEl.appendChild(d);
      }
    }
    if (prev) prev.addEventListener('click', function(){ if(current>0){current--;update();} });
    if (next) next.addEventListener('click', function(){ if(current<getMax()){current++;update();} });

    var sx = 0;
    track.addEventListener('touchstart', function(e){ sx=e.touches[0].clientX; }, {passive:true});
    track.addEventListener('touchend',   function(e){
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx)>40){ current=Math.max(0,Math.min(getMax(),current+(dx<0?1:-1))); update(); }
    }, {passive:true});

    window.addEventListener('resize', setWidth, {passive:true});
    setWidth();
  };

  /* ━━━ スクロールアニメーション ━━━ */
  var ro = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function(el) { ro.observe(el); });

  // 固定チケットボタンを全ページに追加
  var ticketBtn = document.createElement('a');
  ticketBtn.className = 'fixed-ticket-btn';
  ticketBtn.href = '/ryukyugunma/pages/ticket.html';
  ticketBtn.innerHTML = '<span class="fixed-ticket-btn-label">TICKET</span>';
  document.body.appendChild(ticketBtn);
  // トップ画像を過ぎたら表示
if (isTop) {
  // トップページはスクロール後に表示
  ticketBtn.style.display = 'none';
  window.addEventListener('scroll', function() {
    ticketBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  }, { passive: true });
} else {
  // 他のページは最初から表示
  ticketBtn.style.display = 'flex';
}


  /* ━━━ ページトップボタン ━━━ */
  var topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    window.addEventListener('scroll', function(){ topBtn.classList.toggle('show', window.scrollY>400); }, {passive:true});
    topBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
  }

});
