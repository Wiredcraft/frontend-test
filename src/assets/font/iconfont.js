!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    a,
    d =
      '<svg><symbol id="icon-xxhdpiShape" viewBox="0 0 1024 1024"><path d="M512 1024C229.205333 1024 0 794.794667 0 512S229.205333 0 512 0s512 229.205333 512 512-229.205333 512-512 512z m0-496.469333a170.666667 170.666667 0 1 0 0-341.333334 170.666667 170.666667 0 0 0 0 341.333334z m263.765333 263.722666a263.765333 263.765333 0 1 0-527.530666 0h527.530666z"  ></path></symbol><symbol id="icon-Homehomepagemenu" viewBox="0 0 1024 1024"><path d="M886.976 387.904l-362.666667-256a21.354667 21.354667 0 0 0-24.618666 0l-362.666667 256A21.376 21.376 0 0 0 128 405.333333v469.333334a21.333333 21.333333 0 0 0 21.333333 21.333333h234.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V618.666667h213.333334v256a21.333333 21.333333 0 0 0 21.333333 21.333333h234.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V405.333333a21.376 21.376 0 0 0-9.024-17.429333z" fill="#646464" ></path></symbol><symbol id="icon-bell" viewBox="0 0 1024 1024"><path d="M848.125265 601.891777v-208.02007c0-140.783944-87.278516-260.595354-210.212553-310.800986h1.1959C617.582421 34.415329 568.794152 0 512.011073 0c-56.849518 0-105.615641 34.415329-127.075392 83.070721h1.12946c-122.911891 50.205632-210.190406 170.017042-210.190406 310.800986v208.064363c-69.937973 0.620096-126.233834 57.779662-126.233834 128.249146v27.638565c0 70.823825 57.181712 128.337731 128.027683 128.337731h668.662832c70.823825 0 128.005537-57.513906 128.005536-128.337731v-27.638565c0-70.49163-56.273714-127.651196-126.211687-128.293439zM389.077036 1023.977854c56.805225 0 105.593495-34.415329 127.053246-83.070721H261.957351c21.459752 48.677538 70.292314 83.070721 127.119685 83.070721z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1025 1024"><path d="M786.527 741.355c68.17-78.597 109.424-181.17 109.424-293.38C895.951 200.566 695.386 0 447.976 0 200.566 0 0 200.565 0 447.976 0 695.386 200.566 895.95 447.976 895.95c112.167 0 214.707-41.225 293.293-109.35l228.045 228.046c12.37 12.37 32.812 12.552 45.308 0.056 12.584-12.583 12.471-32.781-0.056-45.308l-228.04-228.04z m-338.551 90.6c-212.066 0-383.98-171.914-383.98-383.98 0-212.065 171.914-383.978 383.98-383.978 212.065 0 383.979 171.913 383.979 383.979 0 212.065-171.914 383.979-383.98 383.979z"  ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    c || ((c = !0), o());
  }
  (t = function () {
    var e, t, n;
    ((n = document.createElement("div")).innerHTML = d),
      (d = null),
      (t = n.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (e = t),
        (n = document.body).firstChild
          ? (t = n.firstChild).parentNode.insertBefore(e, t)
          : n.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (a = function () {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(a, 50);
          }
          s();
        })(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
