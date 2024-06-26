(() => {
  var e,
    t = {
      250: () => {},
      444: (e, t, a) => {
        "use strict";
        var o = a(169);
        const n = document.querySelector("#popoverDemo"),
          r = document.querySelector("#offcanvasDemo"),
          l = document.querySelector("#topnav"),
          s = document.querySelector("#topbar"),
          c = document.querySelector("#sidebar"),
          i = document.querySelector("#sidebarSmall"),
          d = document.querySelector("#sidebarUser"),
          u = document.querySelector("#sidebarSmallUser"),
          p = document.querySelector("#sidebarSizeContainer"),
          h = document.querySelectorAll('input[name="navPosition"]'),
          b = document.querySelectorAll('[class^="container"]'),
          f = document.querySelector("#stylesheetLight"),
          m = document.querySelector("#stylesheetDark"),
          k = {
            showPopover:
              !localStorage.getItem("dashkitShowPopover") ||
              localStorage.getItem("dashkitShowPopover"),
            colorScheme: localStorage.getItem("dashkitColorScheme")
              ? localStorage.getItem("dashkitColorScheme")
              : "light",
            navPosition: localStorage.getItem("dashkitNavPosition")
              ? localStorage.getItem("dashkitNavPosition")
              : "sidenav",
            navColor: localStorage.getItem("dashkitNavColor")
              ? localStorage.getItem("dashkitNavColor")
              : "default",
            sidebarSize: localStorage.getItem("dashkitSidebarSize")
              ? localStorage.getItem("dashkitSidebarSize")
              : "base",
          },
          v = p ? new o.UO(p) : null;

        function y(e) {
          "topnav" == e ? v.hide() : v.show();
        }

        function g(e) {
          e && e.setAttribute("style", "display: none !important");
        }
        var S, w, L;
        !(function () {
          if (n) {
            const e = JSON.parse(k.showPopover) && "base" === k.sidebarSize,
              t = new o.J2(n, {
                offset: [0, 16],
                placement: "top",
                customClass: "popover-lg popover-dark d-none d-md-block",
                trigger: "manual",
              });
            e && t.show(),
              n.addEventListener("click", function () {
                e && t.hide(), localStorage.setItem("dashkitShowPopover", !1);
              });
          }
        })(),
          (function () {
            const e = window.location.search.substring(1).split("&");
            for (let t = 0; t < e.length; t++) {
              const a = e[t].split("="),
                o = a[0],
                n = a[1];
              ("colorScheme" != o &&
                "navPosition" != o &&
                "navColor" != o &&
                "sidebarSize" != o) ||
                (localStorage.setItem(
                  "dashkit" + o.charAt(0).toUpperCase() + o.slice(1),
                  n
                ),
                (k[o] = n));
            }
          })(),
          "light" == (S = k.colorScheme)
            ? ((f.disabled = !1), (m.disabled = !0), (S = "light"))
            : "dark" == S &&
              ((f.disabled = !0), (m.disabled = !1), (S = "dark")),
          (function (e) {
            if (l && s && c && i && d && u)
              if ("topnav" == e) {
                g(s), g(c), g(i);
                for (let e = 0; e < b.length; e++)
                  b[e].classList.remove("container-fluid"),
                    b[e].classList.add("container");
              } else if ("combo" == e) {
                g(l), g(d), g(u);
                for (let e = 0; e < b.length; e++)
                  b[e].classList.remove("container"),
                    b[e].classList.add("container-fluid");
              } else if ("sidenav" == e) {
                g(l), g(s);
                for (let e = 0; e < b.length; e++)
                  b[e].classList.remove("container"),
                    b[e].classList.add("container-fluid");
              }
          })(k.navPosition),
          (w = k.navColor),
          c &&
            i &&
            l &&
            ("default" == w
              ? (c.classList.add("navbar-light"),
                i.classList.add("navbar-light"),
                l.classList.add("navbar-light"))
              : "inverted" == w
              ? (c.classList.add("navbar-dark"),
                i.classList.add("navbar-dark"),
                l.classList.add("navbar-dark"))
              : "vibrant" == w &&
                (c.classList.add("navbar-dark", "navbar-vibrant"),
                i.classList.add("navbar-dark", "navbar-vibrant"),
                l.classList.add("navbar-dark", "navbar-vibrant"))),
          "base" == (L = k.sidebarSize) ? g(i) : "small" == L && g(c),
          r &&
            (function (e, t, a, o, n) {
              (e.querySelector(
                '[name="colorScheme"][value="' + t + '"]'
              ).checked = !0),
                (e.querySelector(
                  '[name="navPosition"][value="' + a + '"]'
                ).checked = !0),
                (e.querySelector(
                  '[name="navColor"][value="' + o + '"]'
                ).checked = !0),
                (e.querySelector(
                  '[name="sidebarSize"][value="' + n + '"]'
                ).checked = !0);
            })(r, k.colorScheme, k.navPosition, k.navColor, k.sidebarSize),
          p && y(k.navPosition),
          (document.body.style.display = "block"),
          r &&
            (r.addEventListener("submit", function (e) {
              e.preventDefault(),
                (function (e) {
                  const t = e.querySelector(
                      '[name="colorScheme"]:checked'
                    ).value,
                    a = e.querySelector('[name="navPosition"]:checked').value,
                    o = e.querySelector('[name="navColor"]:checked').value,
                    n = e.querySelector('[name="sidebarSize"]:checked').value;
                  localStorage.setItem("dashkitColorScheme", t),
                    localStorage.setItem("dashkitNavPosition", a),
                    // localStorage.setItem("dashkitNavColor", o),
                    localStorage.setItem("dashkitSidebarSize", n),
                    (window.location = window.location.pathname);
                })(r);
            }),
            h.forEach(function (e) {
              e.parentElement.addEventListener("click", function () {
                y(e.value);
              });
            }));
      },
      328: () => {
        const e = document.querySelectorAll("[data-map]");
        "undefined" != typeof mapboxgl &&
          e.forEach((e) => {
            const t = {
              ...(e.dataset.map ? JSON.parse(e.dataset.map) : {}),
              ...{
                container: e,
                style: "mapbox://styles/mapbox/light-v9",
                scrollZoom: !1,
                interactive: !1,
              },
            };
            (mapboxgl.accessToken =
              "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg"),
              new mapboxgl.Map(t);
          });
      },
      524: (e, t, a) => {
        "use strict";
        var o = a(169),
          n = a(682);
        document.querySelectorAll("[data-autosize]").forEach((e) => {
          (0, n.Z)(e);
        }),
          (window.autosize = n.Z),
          (window.Alert = o.bZ),
          (window.Button = o.zx),
          (window.Carousel = o.lr),
          (window.Collapse = o.UO),
          (window.Dropdown = o.Lt),
          (window.Modal = o.u_),
          (window.Offcanvas = o.TB),
          (window.Popover = o.J2),
          (window.ScrollSpy = o.DA),
          (window.Tab = o.OK),
          (window.Toast = o.FN),
          (window.Tooltip = o.u);
        var r = a(320);
        const l = document.querySelectorAll(".checklist");
        l &&
          new r.Sortable(l, {
            draggable: ".form-check",
            handle: ".form-check-label",
            mirror: { constrainDimensions: !0 },
          });
        var s = a(529),
          c = a.n(s);
        document.querySelectorAll("[data-choices]").forEach((e) => {
          const t = {
            ...(e.dataset.choices ? JSON.parse(e.dataset.choices) : {}),
            ...{
              classNames: {
                containerInner: e.className,
                input: "form-control",
                inputCloned: "form-control-sm",
                listDropdown: "dropdown-menu",
                itemChoice: "dropdown-item",
                activeState: "show",
                selectedState: "active",
              },
              shouldSort: !1,
              callbackOnCreateTemplates: function (e) {
                return {
                  choice: (t, a) => {
                    const o = `${t.item} ${t.itemChoice} ${
                        a.disabled ? t.itemDisabled : t.itemSelectable
                      }`,
                      n = a.disabled
                        ? 'data-choice-disabled aria-disabled="true"'
                        : "data-choice-selectable",
                      r = a.groupId > 0 ? 'role="treeitem"' : 'role="option"',
                      l = this.config.itemSelectText,
                      s =
                        a.customProperties && a.customProperties.avatarSrc
                          ? `\n            <div class="avatar avatar-xs me-3">\n              <img class="avatar-img rounded-circle" src="${a.customProperties.avatarSrc}" alt="${a.label}" >\n            </div> ${a.label}\n          `
                          : a.label;
                    return e(
                      `\n            <div class="${o}" data-select-text="${l}" data-choice ${n} data-id="${a.id}" data-value="${a.value}" ${r}>\n              ${s}\n            </div>\n          `
                    );
                  },
                };
              },
            },
          };
          new (c())(e, t);
        }),
          (window.Choices = c());
        var i = a(25),
          d = a.n(i);
        (d().autoDiscover = !1),
          (d().thumbnailWidth = null),
          (d().thumbnailHeight = null);
        document.querySelectorAll("[data-dropzone]").forEach((e) => {
          let t;
          const a = e.dataset.dropzone ? JSON.parse(e.dataset.dropzone) : {},
            o = {
              previewsContainer: e.querySelector(".dz-preview"),
              previewTemplate: e.querySelector(".dz-preview").innerHTML,
              init: function () {
                this.on("addedfile", function (e) {
                  1 == a.maxFiles && t && this.removeFile(t), (t = e);
                });
              },
            },
            n = { ...a, ...o };
          (e.querySelector(".dz-preview").innerHTML = ""), new (d())(e, n);
        }),
          (window.Dropzone = d());
        var u = a(527);
        document.querySelectorAll("[data-flatpickr]").forEach((e) => {
          const t = e.dataset.flatpickr ? JSON.parse(e.dataset.flatpickr) : {};
          (0, u.Z)(e, t);
        }),
          (window.flatpickr = u.Z);
        var p = a(802),
          h = a.n(p),
          b = a(344),
          f = a.n(b),
          m = a(157),
          k = a.n(m);
        const v = document.querySelectorAll(".highlight");
        h().registerLanguage("xml", k()),
          h().registerLanguage("javascript", f()),
          v.forEach((e) => {
            h().highlightBlock(e);
          }),
          (window.hljs = h());
        var y = a(382),
          g = a.n(y);
        const S = document.querySelectorAll("[data-inputmask]");
        g()({ rightAlign: !1 }).mask(S), (window.Inputmask = g());
        const w = document.querySelectorAll(".kanban-category"),
          L = document.querySelectorAll(".kanban-add-link"),
          C = document.querySelectorAll(".kanban-add-form");

        function E(e) {
          const t = e.closest(".kanban-add"),
            a = t.querySelector(".card"),
            o = t.querySelector(".kanban-add-link"),
            n = t.querySelector(".kanban-add-form");
          o.classList.toggle("d-none"),
            n.classList.toggle("d-none"),
            a &&
              a.classList.contains("card-sm") &&
              (a.classList.contains("card-flush")
                ? a.classList.remove("card-flush")
                : a.classList.add("card-flush"));
        }
        w &&
          new r.Sortable(w, {
            draggable: ".kanban-item",
            mirror: { constrainDimensions: !0 },
          }),
          L.forEach((e) => {
            e.addEventListener("click", () => {
              E(e);
            });
          }),
          C.forEach((e) => {
            e.addEventListener("reset", function () {
              E(e);
            }),
              e.addEventListener("submit", function (e) {
                e.preventDefault();
              });
          }),
          (window.Sortable = r.Sortable);
        var A = a(709),
          O = a.n(A);
        !(function () {
          const e = document.querySelectorAll("[data-list]"),
            t = document.querySelectorAll("[data-sort]");

          function a(e, t, a) {
            const o = [].slice.call(e).filter(function (e) {
              return e.checked;
            });
            t &&
              (o.length ? t.classList.add("show") : t.classList.remove("show"),
              (a.innerHTML = o.length));
          }
          void 0 !== O() &&
            e &&
            [].forEach.call(e, function (e) {
              !(function (e) {
                const t = e.querySelector(".list-alert"),
                  o = e.querySelector(".list-alert-count"),
                  n = e.querySelector(".list-alert .btn-close"),
                  r = e.querySelectorAll(".list-checkbox"),
                  l = e.querySelector(".list-checkbox-all"),
                  s = e.querySelectorAll(".list-pagination"),
                  c = e.querySelector(".list-pagination-prev"),
                  i = e.querySelector(".list-pagination-next"),
                  d = e.dataset.list && JSON.parse(e.dataset.list),
                  u = Object.assign(
                    {
                      listClass: "list",
                      searchClass: "list-search",
                      sortClass: "list-sort",
                    },
                    d
                  ),
                  p = new (O())(e, u);
                s &&
                  [].forEach.call(s, function (e) {
                    e.addEventListener("click", function (e) {
                      e.preventDefault();
                    });
                  }),
                  i &&
                    i.addEventListener("click", function (e) {
                      e.preventDefault();
                      const t = parseInt(p.i) + parseInt(p.page);
                      t <= p.size() && p.show(t, p.page);
                    }),
                  c &&
                    c.addEventListener("click", function (e) {
                      e.preventDefault();
                      const t = parseInt(p.i) - parseInt(p.page);
                      t > 0 && p.show(t, p.page);
                    }),
                  r &&
                    [].forEach.call(r, function (e) {
                      e.addEventListener("change", function () {
                        a(r, t, o), l && (l.checked = !1);
                      });
                    }),
                  l &&
                    l.addEventListener("change", function () {
                      [].forEach.call(r, function (e) {
                        e.checked = l.checked;
                      }),
                        a(r, t, o);
                    }),
                  n &&
                    n.addEventListener("click", function (e) {
                      e.preventDefault(),
                        l && (l.checked = !1),
                        [].forEach.call(r, function (e) {
                          e.checked = !1;
                        }),
                        a(r, t, o);
                    });
              })(e);
            }),
            void 0 !== O() &&
              t &&
              [].forEach.call(t, function (e) {
                e.addEventListener("click", function (e) {
                  e.preventDefault();
                });
              });
        })();
        window.List = O();
        a(328);
        document.querySelectorAll(".navbar-nav .collapse").forEach((e) => {
          const t = new o.UO(e, { toggle: !1 });
          e.addEventListener("show.bs.collapse", (a) => {
            a.stopPropagation();
            e.parentElement
              .closest(".collapse")
              .querySelectorAll(".collapse")
              .forEach((e) => {
                const a = o.UO.getInstance(e);
                a !== t && a.hide();
              });
          }),
            e.addEventListener("hide.bs.collapse", (t) => {
              t.stopPropagation();
              e.querySelectorAll(".collapse").forEach((e) => {
                o.UO.getInstance(e).hide();
              });
            });
        });
        const q = document.querySelectorAll(
          ".navbar .dropup, .navbar .dropend, .navbar .dropdown, .navbar .dropstart"
        );
        window.innerWidth > 767 &&
          q.forEach((e) => {
            const t = e.querySelector('[data-bs-toggle="dropdown"]'),
              a = new o.Lt(t);
            e.addEventListener("mouseenter", () => {
              a.show();
            }),
              e.addEventListener("mouseleave", () => {
                a.hide();
              });
          });
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e) => {
          new o.J2(e);
        });
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e) => {
          new o.u(e);
        });
        var x = a(95),
          D = a.n(x);
        document.querySelectorAll("[data-quill]").forEach((e) => {
          const t = {
            ...(e.dataset.quill ? JSON.parse(e.dataset.quill) : {}),
            modules: {
              toolbar: [
                ["bold", "italic"],
                ["link", "blockquote", "code", "image"],
                [{ list: "ordered" }, { list: "bullet" }],
              ],
            },
            theme: "snow",
          };
          new (D())(e, t);
        }),
          (window.Quill = D());
        document.querySelectorAll('[data-toggle="wizard"]').forEach((e) => {
          e.addEventListener("click", function (t) {
            t.preventDefault();
            new o.OK(e).show(), e.classList.remove("active");
          });
        });
        var I = a(181);

        function T(e) {
          return getComputedStyle(document.documentElement).getPropertyValue(e);
        }
        I.kL.register(
          I.qi,
          I.vn,
          I.ZL,
          I.N0,
          I.uw,
          I.WY,
          I.jI,
          I.Gu,
          I.De,
          I.f$,
          I.ST,
          I.jn,
          I.WV,
          I.tt,
          I.od,
          I.CV,
          I.Xi,
          I.l7,
          I.ho,
          I.FB,
          I.RM,
          I.Dx,
          I.u
        );
        const J = {
            gray: {
              300: T("--bs-chart-gray-300"),
              600: T("--bs-chart-gray-600"),
              700: T("--bs-chart-gray-700"),
              800: T("--bs-chart-gray-800"),
              900: T("--bs-chart-gray-900"),
            },
            primary: {
              100: T("--bs-chart-primary-100"),
              300: T("--bs-chart-primary-300"),
              700: T("--bs-chart-primary-700"),
            },
            black: T("--bs-dark"),
            white: T("--bs-white"),
            transparent: "transparent",
          },
          N = "Cerebri Sans",
          P = document.querySelectorAll('[data-toggle="chart"]'),
          z = document.querySelectorAll('[data-toggle="legend"]');

        function B(e) {
          const { chart: t, tooltip: a } = e,
            o = (function (e) {
              let t = e.canvas.parentNode.querySelector("div");
              if (!t) {
                (t = document.createElement("div")),
                  t.setAttribute("id", "chart-tooltip"),
                  t.setAttribute("role", "tooltip"),
                  t.classList.add("popover", "bs-popover-top");
                const a = document.createElement("div");
                a.classList.add("popover-arrow", "translate-middle-x");
                const o = document.createElement("div");
                o.classList.add("popover-content"),
                  t.appendChild(a),
                  t.appendChild(o),
                  e.canvas.parentNode.appendChild(t);
              }
              return t;
            })(t);
          if (0 === a.opacity) return void (o.style.visibility = "hidden");
          if (a.body) {
            const e = a.title || [],
              n = a.body.map((e) => e.lines),
              r = document.createElement("div");
            e.forEach((e) => {
              const t = document.createElement("h3");
              t.classList.add("popover-header", "text-center", "text-nowrap");
              const a = document.createTextNode(e);
              t.appendChild(a), r.appendChild(t);
            });
            const l = document.createElement("div");
            n.forEach((e, o) => {
              const r = a.labelColors[o],
                s = document.createElement("span");
              s.classList.add("popover-body-indicator"),
                (s.style.backgroundColor =
                  "line" === t.config.type &&
                  "rgba(0,0,0,0.1)" !== r.borderColor
                    ? r.borderColor
                    : r.backgroundColor);
              const c = document.createElement("div");
              c.classList.add(
                "popover-body",
                "d-flex",
                "align-items-center",
                "text-nowrap"
              ),
                c.classList.add(
                  n.length > 1
                    ? "justify-content-left"
                    : "justify-content-center"
                );
              const i = document.createTextNode(e);
              c.appendChild(s), c.appendChild(i), l.appendChild(c);
            });
            const s = o.querySelector(".popover-content");
            for (; s.firstChild; ) s.firstChild.remove();
            s.appendChild(r), s.appendChild(l);
          }
          const { offsetLeft: n, offsetTop: r } = t.canvas;
          (o.style.visibility = "visible"),
            (o.style.left = n + a.caretX + "px"),
            (o.style.top = r + a.caretY + "px"),
            (o.style.transform =
              "translateX(-50%) translateY(-100%) translateY(-1rem)");
        }

        function M(e) {
          const t = e.chart.scales[e.dataset.yAxisID || "y"];
          return (
            (e.chart.tooltip.dataPoints.length > 1
              ? " " + e.dataset.label + " "
              : " ") + t.options.ticks.callback.apply(t, [e.parsed.y, 0, []])
          );
        }
        (I.kL.defaults.responsive = !0),
          (I.kL.defaults.maintainAspectRatio = !1),
          (I.kL.defaults.color = T("--bs-chart-default-color")),
          (I.kL.defaults.font.family = N),
          (I.kL.defaults.font.size = 13),
          (I.kL.defaults.layout.padding = 0),
          (I.kL.defaults.plugins.legend.display = !1),
          (I.kL.defaults.elements.point.radius = 0),
          (I.kL.defaults.elements.point.backgroundColor = J.primary[700]),
          (I.kL.defaults.elements.line.tension = 0.4),
          (I.kL.defaults.elements.line.borderWidth = 3),
          (I.kL.defaults.elements.line.borderColor = J.primary[700]),
          (I.kL.defaults.elements.line.backgroundColor = J.transparent),
          (I.kL.defaults.elements.line.borderCapStyle = "rounded"),
          (I.kL.defaults.elements.bar.backgroundColor = J.primary[700]),
          (I.kL.defaults.elements.bar.borderWidth = 0),
          (I.kL.defaults.elements.bar.borderRadius = 10),
          (I.kL.defaults.elements.bar.borderSkipped = !1),
          (I.kL.defaults.datasets.bar.maxBarThickness = 10),
          (I.kL.defaults.elements.arc.backgroundColor = J.primary[700]),
          (I.kL.defaults.elements.arc.borderColor = T(
            "--bs-chart-arc-border-color"
          )),
          (I.kL.defaults.elements.arc.borderWidth = 4),
          (I.kL.defaults.elements.arc.hoverBorderColor = T(
            "--bs-chart-arc-hover-border-color"
          )),
          (I.kL.defaults.plugins.tooltip.enabled = !1),
          (I.kL.defaults.plugins.tooltip.mode = "index"),
          (I.kL.defaults.plugins.tooltip.intersect = !1),
          (I.kL.defaults.plugins.tooltip.external = B),
          (I.kL.defaults.plugins.tooltip.callbacks.label = M),
          (I.kL.defaults.datasets.doughnut.cutout = "83%"),
          (I.kL.overrides.doughnut.plugins.tooltip.callbacks.title = function (
            e
          ) {
            return e[0].label;
          }),
          (I.kL.overrides.doughnut.plugins.tooltip.callbacks.label = function (
            e
          ) {
            const t = e.chart.options.plugins.tooltip.callbacks,
              a = t.beforeLabel() || "",
              o = t.afterLabel() || "";
            return a + e.formattedValue + o;
          }),
          (I.kL.defaults.scales.linear.grid = {
            borderDash: [2],
            borderDashOffset: [2],
            color: T("--bs-chart-grid-line-color"),
            drawBorder: !1,
            drawTicks: !1,
          }),
          (I.kL.defaults.scales.linear.ticks.beginAtZero = !0),
          (I.kL.defaults.scales.linear.ticks.padding = 10),
          (I.kL.defaults.scales.linear.ticks.stepSize = 10),
          (I.kL.defaults.scales.category.grid = {
            drawBorder: !1,
            drawOnChartArea: !1,
            drawTicks: !1,
          }),
          (I.kL.defaults.scales.category.ticks.padding = 20),
          P.forEach(function (e) {
            const t = e.dataset.trigger;
            e.addEventListener(t, function () {
              !(function (e) {
                const t = e.dataset.target,
                  a = e.dataset.action,
                  o = parseInt(e.dataset.dataset),
                  n = document.querySelector(t),
                  r = I.kL.getChart(n);
                if ("toggle" === a) {
                  const e = r.data.datasets,
                    t = e.filter(function (e) {
                      return !e.hidden;
                    })[0];
                  let a = e.filter(function (e) {
                    return 1e3 === e.order;
                  })[0];
                  if (!a) {
                    a = {};
                    for (const e in t) "_meta" !== e && (a[e] = t[e]);
                    (a.order = 1e3), (a.hidden = !0), e.push(a);
                  }
                  const n = e[o] === t ? a : e[o];
                  for (const e in t) "_meta" !== e && (t[e] = n[e]);
                  r.update();
                }
                if ("add" === a) {
                  const e = r.data.datasets[o],
                    t = e.hidden;
                  e.hidden = !t;
                }
                r.update();
              })(e);
            });
          }),
          document.addEventListener("DOMContentLoaded", function () {
            z.forEach(function (e) {
              !(function (e) {
                const t = I.kL.getChart(e),
                  a = document.createElement("div");
                const o = e.dataset.target;
                document.querySelector(o).appendChild(a);
              })(e);
            });
          }),
          (window.Chart = I.kL),
          I.kL.register(
            I.qi,
            I.vn,
            I.ZL,
            I.N0,
            I.uw,
            I.WY,
            I.jI,
            I.Gu,
            I.De,
            I.f$,
            I.ST,
            I.jn,
            I.WV,
            I.tt,
            I.od,
            I.CV,
            I.Xi,
            I.l7,
            I.ho,
            I.FB,
            I.RM,
            I.Dx,
            I.u
          );
        const $ = document.getElementById("audienceChart");
        $ &&
          new I.kL($, {
            type: "line",
            options: {
              scales: {
                yAxisOne: {
                  display: "auto",
                  grid: { color: "#283E59" },
                  ticks: {
                    callback: function (e) {
                      return e + "k";
                    },
                  },
                },
                yAxisTwo: {
                  display: "auto",
                  grid: { color: "#283E59" },
                  ticks: {
                    callback: function (e) {
                      return e + "%";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Customers",
                  data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                  yAxisID: "yAxisOne",
                },
                {
                  label: "Sessions",
                  data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
                  yAxisID: "yAxisOne",
                  hidden: !0,
                },
                {
                  label: "Conversion",
                  data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
                  yAxisID: "yAxisTwo",
                  hidden: !0,
                },
              ],
            },
          });
        const j = document.getElementById("conversionsChart");
        j &&
          new I.kL(j, {
            type: "bar",
            options: {
              scales: {
                y: {
                  ticks: {
                    callback: function (e) {
                      return e + "%";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Oct 1",
                "Oct 2",
                "Oct 3",
                "Oct 4",
                "Oct 5",
                "Oct 6",
                "Oct 7",
                "Oct 8",
                "Oct 9",
                "Oct 10",
                "Oct 11",
                "Oct 12",
              ],
              datasets: [
                {
                  label: "2020",
                  data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                },
                {
                  label: "2019",
                  data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
                  backgroundColor: "#d2ddec",
                  hidden: !0,
                },
              ],
            },
          });
        const F = document.getElementById("trafficChart");
        F &&
          new I.kL(F, {
            type: "doughnut",
            options: {
              plugins: {
                tooltip: {
                  callbacks: {
                    afterLabel: function () {
                      return "%";
                    },
                  },
                },
              },
            },
            data: {
              labels: ["Direct", "Organic", "Referral"],
              datasets: [
                {
                  data: [60, 25, 15],
                  backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
                },
                {
                  data: [15, 45, 20],
                  backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
                  hidden: !0,
                },
              ],
            },
          });
        const W = document.getElementById("trafficChartAlt");
        W &&
          new I.kL(W, {
            type: "doughnut",
            options: {
              plugins: {
                tooltip: {
                  callbacks: {
                    afterLabel: function () {
                      return "%";
                    },
                  },
                },
              },
            },
            data: {
              labels: ["Direct", "Organic", "Referral"],
              datasets: [
                {
                  data: [60, 25, 15],
                  backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
                },
                {
                  data: [15, 45, 20],
                  backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
                  hidden: !0,
                },
              ],
            },
          });
        const Z = document.getElementById("salesChart");
        Z &&
          new I.kL(Z, {
            type: "line",
            options: {
              scales: {
                y: {
                  ticks: {
                    callback: function (e) {
                      return "$" + e + "k";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Oct 1",
                "Oct 3",
                "Oct 6",
                "Oct 9",
                "Oct 12",
                "Oct 5",
                "Oct 18",
                "Oct 21",
                "Oct 24",
                "Oct 27",
                "Oct 30",
              ],
              datasets: [
                {
                  label: "All",
                  data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25],
                },
                {
                  label: "Direct",
                  data: [7, 40, 12, 27, 34, 17, 19, 30, 28, 32, 24],
                  hidden: !0,
                },
                {
                  label: "Organic",
                  data: [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15],
                  hidden: !0,
                },
              ],
            },
          });
        const U = document.getElementById("ordersChart");
        U &&
          new I.kL(U, {
            type: "bar",
            options: {
              scales: {
                y: {
                  ticks: {
                    callback: function (e) {
                      return "$" + e + "k";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Sales",
                  data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                },
                {
                  label: "Affiliate",
                  data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
                  backgroundColor: "#d2ddec",
                  hidden: !0,
                },
              ],
            },
          });
        const H = document.getElementById("earningsChart");
        H &&
          new I.kL(H, {
            type: "bar",
            options: {
              scales: {
                yAxisOne: {
                  display: "auto",
                  ticks: {
                    callback: function (e) {
                      return "$" + e + "k";
                    },
                  },
                },
                yAxisTwo: {
                  display: "auto",
                  ticks: {
                    callback: function (e) {
                      return e + "k";
                    },
                  },
                },
                yAxisThree: {
                  display: "auto",
                  ticks: {
                    callback: function (e) {
                      return e + "%";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
              ],
              datasets: [
                {
                  label: "Earnings",
                  data: [
                    18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25, 29, 18, 10, 5,
                    15, 10, 20,
                  ],
                  yAxisID: "yAxisOne",
                },
                {
                  label: "Sessions",
                  data: [
                    50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45, 50, 75, 35,
                    25, 55, 19,
                  ],
                  yAxisID: "yAxisTwo",
                  hidden: !0,
                },
                {
                  label: "Bounce",
                  data: [
                    40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48, 40, 57, 25,
                    50, 57, 29,
                  ],
                  yAxisID: "yAxisThree",
                  hidden: !0,
                },
              ],
            },
          });
        const R = document.getElementById("weeklyHoursChart");
        R &&
          new I.kL(R, {
            type: "bar",
            options: {
              scales: {
                y: {
                  ticks: {
                    callback: function (e) {
                      return e + "hrs";
                    },
                  },
                },
              },
            },
            data: {
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [{ data: [21, 12, 28, 15, 5, 12, 17, 2] }],
            },
          });
        const V = document.getElementById("overviewChart");
        V &&
          new I.kL(V, {
            type: "line",
            options: {
              scales: {
                yAxisOne: {
                  display: "auto",
                  ticks: {
                    callback: function (e) {
                      return "$" + e + "k";
                    },
                  },
                },
                yAxisTwo: {
                  display: "auto",
                  ticks: {
                    callback: function (e) {
                      return e + "hrs";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Earned",
                  data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                  yAxisID: "yAxisOne",
                },
                {
                  label: "Hours Worked",
                  data: [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39],
                  yAxisID: "yAxisTwo",
                  hidden: !0,
                },
              ],
            },
          });
        const _ = document.getElementById("sparklineChart");
        _ &&
          new I.kL(_, {
            type: "line",
            options: {
              scales: { y: { display: !1 }, x: { display: !1 } },
              elements: { line: { borderWidth: 2 }, point: { hoverRadius: 0 } },
              plugins: { tooltip: { external: () => !1 } },
            },
            data: {
              labels: new Array(12).fill("Label"),
              datasets: [
                { data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65] },
              ],
            },
          });
        const X = document.querySelectorAll(
          "#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour"
        );
        X &&
          [].forEach.call(X, function (e) {
            new I.kL(e, {
              type: "line",
              options: {
                scales: { y: { display: !1 }, x: { display: !1 } },
                elements: {
                  line: { borderWidth: 2, borderColor: "#D2DDEC" },
                  point: { hoverRadius: 0 },
                },
                plugins: { tooltip: { external: () => !1 } },
              },
              data: {
                labels: new Array(12).fill("Label"),
                datasets: [
                  { data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65] },
                ],
              },
            });
          });
        const Y = document.getElementById("feedChart");
        Y &&
          new I.kL(Y, {
            type: "bar",
            options: {
              scales: {
                y: {
                  ticks: {
                    callback: function (e) {
                      return "$" + e + "k";
                    },
                  },
                },
              },
            },
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Sales",
                  data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                },
                {
                  label: "Affiliate",
                  data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
                  backgroundColor: "#d2ddec",
                  hidden: !0,
                },
              ],
            },
          });
      },
    },
    a = {};

  function o(e) {
    var n = a[e];
    if (void 0 !== n) return n.exports;
    var r = (a[e] = { exports: {} });
    return t[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, a, n, r) => {
      if (!a) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [a, n, r] = e[d], s = !0, c = 0; c < a.length; c++)
            (!1 & r || l >= r) && Object.keys(o.O).every((e) => o.O[e](a[c]))
              ? a.splice(c--, 1)
              : ((s = !1), r < l && (l = r));
          if (s) {
            e.splice(d--, 1);
            var i = n();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      r = r || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
      e[d] = [a, n, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var a in t)
        o.o(t, a) &&
          !o.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 505: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, a) => {
          var n,
            r,
            [l, s, c] = a,
            i = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (n in s) o.o(s, n) && (o.m[n] = s[n]);
            if (c) var d = c(o);
          }
          for (t && t(a); i < l.length; i++)
            (r = l[i]), o.o(e, r) && e[r] && e[r][0](), (e[l[i]] = 0);
          return o.O(d);
        },
        a = (self.webpackChunkdashkit = self.webpackChunkdashkit || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    o.O(void 0, [736], () => o(444)),
    o.O(void 0, [736], () => o(524));
  var n = o.O(void 0, [736], () => o(250));
  n = o.O(n);
})();
//# sourceMappingURL=theme.bundle.js.map
