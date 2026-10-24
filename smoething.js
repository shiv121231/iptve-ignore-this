(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push(
  [[1446],
  {
    62116: function (e, t, l) {
      'use strict';
      var o = l(67294);
      t.Z = () => {
        let[e,
        t] = (0, o.useState) ({
          isMobile: !1,
          isTablet: !1,
          isDesktop: !1,
          isTV: !1
        });
        return (0, o.useEffect) (
          () => {
            let e = () => {
              let e = window.matchMedia('(max-width: 767px)').matches;
              t({
                isMobile: e,
                isTablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches,
                isDesktop: window.matchMedia('(min-width: 1024px) and (max-width: 1919px)').matches,
                isTV: window.matchMedia('(min-width: 1920px)').matches
              })
            };
            return e(),
            window.addEventListener('resize', e),
            () => window.removeEventListener('resize', e)
          },
          []
        ),
        e
      }
    },
    54111: function (e, t, l) {
      'use strict';
      var o = l(85893);
      l(67294);
      var n = l(67274),
      i = l.n(n);
      t.Z = () => (0, o.jsxs) (
        'div',
        {
          className: ''.concat(i().spinner),
          children: [
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            }),
            (0, o.jsx) ('div', {
              className: i().spinner_blade
            })
          ]
        }
      )
    },
    20754: function (e, t, l) {
      'use strict';
      var o = l(85893),
      n = l(67294),
      i = l(46791),
      a = l.n(i),
      r = l(41664),
      s = l.n(r),
      c = l(13114),
      d = l(34221),
      u = l(50549),
      v = l(72679);
      l(88922);
      var p = l(11163);
      t.Z = e => {
        var t,
        l,
        i,
        r,
        m,
        h;
        let {
          data: g,
          media_type: f,
          genresMovie: y,
          genresTv: w,
          cardType: _
        }
        = e,
        [
          b,
          x
        ] = (0, n.useState) (!0),
        [
          S,
          j
        ] = (0, n.useState) (y),
        [
          E,
          N
        ] = (0, n.useState) (w),
        [
          k,
          C
        ] = (0, n.useState) (!0),
        [
          L,
          I
        ] = (0, n.useState) (!1),
        P = new Date(
          (null == g ? void 0 : g.release_date) ||
          (null == g ? void 0 : g.first_air_date)
        ).getFullYear() ||
        (
          null == g ? void 0 : null === (t = g.release_date) ||
          void 0 === t ? void 0 : t.split('-') [2]
        ),
        A = null == g ? void 0 : g.original_language,
        T = [];
        null == g ||
        null === (l = g.genre_ids) ||
        void 0 === l ||
        l.map(
          e => {
            (null == g ? void 0 : g.media_type) === 'movie' ||
            'movie' === f ? null == S ||
            S.map(t => {
              (null == t ? void 0 : t.id) === e &&
              T.push(null == t ? void 0 : t.name)
            }) : ((null == g ? void 0 : g.media_type) === 'tv' || 'tv' === f) &&
            (
              null == E ||
              E.map(t => {
                (null == t ? void 0 : t.id) === e &&
                T.push(null == t ? void 0 : t.name)
              })
            )
          }
        ),
        console.log({
          Genres: T
        });
        let M = (0, p.useRouter) (),
        D = ''.concat(
          (null == g ? void 0 : g.media_type) === 'person' ? '/person?id=' + (null == g ? void 0 : g.id) : '/detail?type=' + ((null == g ? void 0 : g.media_type) || f) + '&id=' + (null == g ? void 0 : g.id)
        );
        return (0, o.jsxs) (
          s(),
          {
            href: D,
            className: a().MovieCardSmall,
            'data-tooltip-id': 'tooltip',
            'data-tooltip-html': ''.concat(
              (null == g ? void 0 : null === (i = g.title) || void 0 === i ? void 0 : i.length) > 30 ||
              (null == g ? void 0 : null === (r = g.name) || void 0 === r ? void 0 : r.length) > 30 ? (null == g ? void 0 : g.title) ||
              (null == g ? void 0 : g.name) : ''
            ),
            'aria-label': (null == g ? void 0 : g.name) ||
            'poster',
            role: 'button',
            tabIndex: 0,
            onKeyDown: e => {
              ('Enter' === e.key || ' ' === e.key) &&
              (e.preventDefault(), M.push(D))
            },
            children: [
              (0, o.jsx) (
                c.M,
                {
                  mode: 'sync',
                  children: (0, o.jsx) (
                    d.E.div,
                    {
                      whileHover: {
                        y: '-0.5rem'
                      },
                      whileTap: {
                        y: '0.2rem'
                      },
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 10
                      },
                      tabIndex: - 1,
                      children: (0, o.jsx) (
                        'div',
                        {
                          className: ''.concat(a().img, ' ').concat(
                            (null == g ? void 0 : g.poster_path) !== null &&
                            (null == g ? void 0 : g.poster_path) !== void 0 ? 'skeleton' : null
                          ),
                          children: (0, o.jsx) (
                            'div',
                            {
                              children: (0, o.jsx) (
                                v.LazyLoadImage,
                                {
                                  src: ''.concat(
                                    L ? '/images/fallback_person.jpg' : (null == g ? void 0 : g.poster_path) !== null &&
                                    (null == g ? void 0 : g.poster_path) !== void 0 ||
                                    (null == g ? void 0 : g.profile_path) !== null &&
                                    (null == g ? void 0 : g.profile_path) !== void 0 ||
                                    (null == g ? void 0 : g.still_path) !== null &&
                                    (null == g ? void 0 : g.still_path) !== void 0 ? 'https://image.tmdb.org/t/p/original'.replace('/original', '/w185') + (
                                      (null == g ? void 0 : g.poster_path) ||
                                      (null == g ? void 0 : g.profile_path) ||
                                      (null == g ? void 0 : g.still_path)
                                    ) ||
                                    null : b ? '/images/logo.svg' : '/images/fallback_person.jpg'
                                  ),
                                  height: '100%',
                                  width: '100%',
                                  useIntersectionObserver: !0,
                                  effect: 'opacity',
                                  className: ''.concat(a().img, ' ').concat(b ? 'skeleton' : null),
                                  onLoad: () => {
                                    setTimeout(() => {
                                      x(!1),
                                      C(!1)
                                    }, 700)
                                  },
                                  loading: 'lazy',
                                  onError: e => {
                                    I(!0),
                                    x(!1)
                                  },
                                  alt: (null == g ? void 0 : g.id) ||
                                  'sm'
                                },
                                null == g ? void 0 : g.id
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              ),
              (0, o.jsxs) (
                'div',
                {
                  className: ''.concat(a().metaData),
                  children: [
                    (0, o.jsx) (
                      'h1',
                      {
                        children: (null == g ? void 0 : g.title) ||
                        (null == g ? void 0 : g.name) ||
                        (0, o.jsx) (u.Z, {
                          count: 2
                        })
                      }
                    ),
                    (0, o.jsxs) (
                      'p',
                      {
                        children: [
                          (null == g ? void 0 : g.media_type) ||
                          f ? (
                            null == (h = (null == g ? void 0 : g.media_type) || f) ? void 0 : h.charAt(0).toUpperCase()
                          ) + (null == h ? void 0 : h.slice(1)) : '',
                          (null == g ? void 0 : g.vote_average) ? ' • '.concat(
                            null === (m = parseInt(null == g ? void 0 : g.vote_average)) ||
                            void 0 === m ? void 0 : m.toFixed(1)
                          ) : '',
                          P &&
                          (null == g ? void 0 : g.media_type) !== 'person' &&
                          !Number.isNaN(P) ? ' • '.concat(P) : '',
                          ' ',
                          (null == g ? void 0 : g.media_type) === 'person' &&
                          (null == g ? void 0 : g.known_for_department) ? ' • '.concat(null == g ? void 0 : g.known_for_department) : '',
                          ' ',
                          null != A ? ' • '.concat(A.toUpperCase()) : ''
                        ]
                      }
                    ),
                    (null == g ? void 0 : g.genre_ids) ? (null == T ? void 0 : T.length) > 0 &&
                    (null == T ? void 0 : T.join(', ')) : null == g ? void 0 : g.genres
                  ]
                }
              )
            ]
          },
          null == g ? void 0 : g.id
        )
      }
    },
    91446: function (e, t, l) {
      'use strict';
      l.r(t),
      l.d(t, {
        Watch: function () {
          return ec
        },
      default:
        function () {
          return ed
        }
      });
      var o = l(85893),
      n = l(67294),
      i = l(39332),
      a = l(11163),
      r = l.n(a),
      s = l(29979),
      c = l.n(s),
      d = l(36427),
      u = l(38531),
      v = l(64712),
      p = l(2873),
      m = l(65674),
      h = l.n(m),
      g = l(81895),
      f = l(41664),
      y = l.n(f),
      w = l(20754),
      _ = l(55346),
      b = l(50549),
      x = l(11358),
      S = l.n(x),
      j = l(15581),
      E = l(72679);
      l(88922);
      var N = l(18357),
      k = l(85437),
      C = l(54111),
      L = l(67992);
      let I = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ];
      var P = e => {
        var t,
        l,
        i,
        a,
        r,
        s,
        c,
        d,
        u,
        v,
        m,
        f;
        let {
          watchDetailRef: x,
          id: P,
          type: A,
          data: T,
          season: M,
          episode: D,
          setWatchDetails: R
        }
        = e,
        [
          O,
          q
        ] = (0, n.useState) ('tv' === A ? 'episodes' : 'related'),
        [
          F,
          Z
        ] = (0, n.useState) (),
        [
          U,
          H
        ] = (0, n.useState) (!0),
        [
          B,
          z
        ] = (0, n.useState) (null),
        [
          V,
          $
        ] = (0, n.useState) (M),
        [
          G,
          J
        ] = (0, n.useState) (!0),
        [
          W,
          K
        ] = (0, n.useState) (!1),
        [
          Q,
          Y
        ] = (0, n.useState) (1),
        [
          X,
          ee
        ] = (0, n.useState) (1),
        [
          et,
          el
        ] = (0, n.useState) (),
        [
          eo,
          en
        ] = (0, n.useState) (),
        ei = (0, n.useRef) (null),
        [
          ea,
          er
        ] = (0, n.useState) ('false'),
        [
          es,
          ec
        ] = (0, n.useState) (),
        [
          ed,
          eu
        ] = (0, n.useState) ({
          currentPage: Q,
          category: O
        }),
        [
          ev,
          ep
        ] = (0, N.YD) ({
          triggerOnce: !1
        }),
        em = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];
        (0, n.useEffect) (
          () => {
            (
              async() => {
                try {
                  let e = await(0, p.Z) ({
                    requestID: 'genresMovie'
                  }),
                  t = await(0, p.Z) ({
                    requestID: 'genresTv'
                  });
                  el(e.genres),
                  en(t.genres)
                } catch (e) {
                  console.error('Error fetching genres:', e)
                }
              }
            ) ();
            let e = (0, k.Gw) ();
            er(null == e ? void 0 : e.infiniteScroll)
          },
          []
        ),
        (0, n.useEffect) (() => {
          ec((0, L.Tr) (P))
        }, [
          P
        ]),
        (0, n.useEffect) (
          () => {
            J(!0);
            let e = async() => {
              let e = O.charAt(0).toUpperCase() + O.slice(1);
              if ('overview' !== O) try {
                let t;
                'episodes' === O ? t = await(0, p.Z) ({
                  requestID: ''.concat(A).concat(e),
                  id: P,
                  season: V
                }) : 'crew' === O ||
                'guests' === O ? t = await(0, p.Z) ({
                  requestID: 'tvEpisodeDetail',
                  id: P,
                  season: M,
                  episode: D,
                  page: Q
                }) : (
                  (
                    t = await(0, p.Z) ({
                      requestID: ''.concat(A).concat(e),
                      id: P,
                      page: Q
                    })
                  ).page > t.total_pages &&
                  Y(t.total_pages),
                  ee(t.total_pages > 500 ? 500 : t.total_pages)
                ),
                'true' === ea &&
                ed.currentPage !== Q &&
                ('related' == O || 'similar' == O) ? Z(
                  e => ({
                    ...e ||
                    {
                    },
                    results: [
                      ...(null == e ? void 0 : e.results) ||
                      [],
                      ...(null == t ? void 0 : t.results) ||
                      []
                    ]
                  })
                ) : Z(t),
                J(!1)
              } catch (e) {
                console.error('Error fetching data:', e)
              }
            };
            'true' != ea &&
            e(),
            'true' == ea &&
            (
              ed.category === O ||
              (Z({
              }), Y(1), eu({
                currentPage: 1,
                category: O
              })),
              e()
            )
          },
          [
            O,
            V,
            Q
          ]
        ),
        (0, n.useEffect) (() => {
          ep &&
          Q + 1 <= X &&
          Y(Q + 1)
        }, [
          ep
        ]);
        let eh = () => {
          var e;
          null == ei ||
          null === (e = ei.current) ||
          void 0 === e ||
          e.scrollTo(0, 0)
        };
        return (0, o.jsxs) (
          'div',
          {
            className: h().MetaDetailPage,
            ref: x,
            children: [
              (0, o.jsx) (
                'p',
                {
                  className: ''.concat(h().close, ' btn'),
                  onClick: () => R(!1),
                  children: 'x'
                }
              ),
              (0, o.jsxs) (
                'div',
                {
                  className: h().MetaDetails,
                  ref: ei,
                  children: [
                    (0, o.jsx) (
                      'div',
                      {
                        className: h().category,
                        children: 'tv' === A ? (0, o.jsxs) (
                          o.Fragment,
                          {
                            children: [
                              (0, o.jsx) (
                                'p',
                                {
                                  className: ''.concat('episodes' === O ? h().active : h().inactive),
                                  onClick: () => q('episodes'),
                                  children: 'Episodes'
                                }
                              ),
                              (0, o.jsx) (
                                'p',
                                {
                                  className: ''.concat('crew' === O ? h().active : h().inactive),
                                  onClick: () => q('crew'),
                                  children: 'Crew'
                                }
                              ),
                              (0, o.jsx) (
                                'p',
                                {
                                  className: ''.concat('guests' === O ? h().active : h().inactive),
                                  onClick: () => q('guests'),
                                  children: 'Guests'
                                }
                              )
                            ]
                          }
                        ) : (0, o.jsxs) (
                          o.Fragment,
                          {
                            children: [
                              (0, o.jsx) (
                                'p',
                                {
                                  className: ''.concat('related' === O ? h().active : h().inactive),
                                  onClick: () => q('related'),
                                  children: 'Related'
                                }
                              ),
                              (0, o.jsx) (
                                'p',
                                {
                                  className: ''.concat('similar' === O ? h().active : h().inactive),
                                  onClick: () => q('similar'),
                                  children: 'Similar'
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    'tv' === A &&
                    'episodes' === O ? (0, o.jsxs) (
                      'div',
                      {
                        className: h().EpisodeList,
                        children: [
                          (0, o.jsx) (
                            g.Z,
                            {
                              name: 'season',
                              id: 'season',
                              value: V,
                              onChange: e => $(e.target.value),
                              fullWidth: !0,
                              children: null == T ? void 0 : null === (t = T.seasons) ||
                              void 0 === t ? void 0 : t.map(
                                e => (0, o.jsxs) (
                                  'option',
                                  {
                                    value: null == e ? void 0 : e.season_number,
                                    children: [
                                      e.name,
                                      ' ',
                                      ' ('.concat(e.episode_count, ')')
                                    ]
                                  },
                                  e.id
                                )
                              )
                            }
                          ),
                          'episodes' === O &&
                          (
                            null == F ? void 0 : null === (l = F.episodes) ||
                            void 0 === l ? void 0 : l.map(
                              e => {
                                var t;
                                let l = null === (
                                  t = es.find(
                                    t => t.season == (null == e ? void 0 : e.season_number) &&
                                    t.episode == (null == e ? void 0 : e.episode_number)
                                  )
                                ) ||
                                void 0 === t ? void 0 : t.watchPercentage;
                                return (0, o.jsxs) (
                                  'div',
                                  {
                                    className: ''.concat(h().episode, ' ').concat(B === (null == e ? void 0 : e.id) ? h().ReviewDetail : null, ' ').concat(
                                      parseInt(V) === parseInt(M) &&
                                      parseInt(null == e ? void 0 : e.episode_number) === parseInt(D) ? h().highlightEpisode : null,
                                      ' '
                                    ).concat(
                                      new Date(null == e ? void 0 : e.air_date) >= new Date ? h().notAired : null,
                                      ' '
                                    ).concat(void 0 !== l && 0 !== l && h().semiHighlightEpisode),
                                    onClick: t => z(t => t !== (null == e ? void 0 : e.id) ? null == e ? void 0 : e.id : ''),
                                    'data-tooltip-id': 'tooltip',
                                    'data-tooltip-html': ''.concat(
                                      new Date(null == e ? void 0 : e.air_date) >= new Date ? 'Releasing' : 'Released',
                                      ' : <span\n                    >'
                                    ).concat(new Date(null == e ? void 0 : e.air_date).getDate(), ' ').concat(em[new Date(null == e ? void 0 : e.air_date).getMonth()], ' ').concat(new Date(null == e ? void 0 : e.air_date).getFullYear(), '</span>'),
                                    children: [
                                      (0, o.jsxs) (
                                        'div',
                                        {
                                          className: h().episodeHeader,
                                          children: [
                                            (0, o.jsx) (
                                              y(),
                                              {
                                                href: '/watch?type=tv&id='.concat(null == e ? void 0 : e.show_id, '&season=').concat(null == e ? void 0 : e.season_number, '&episode=').concat(null == e ? void 0 : e.episode_number),
                                                className: h().CardSmall,
                                                onClick: e => e.stopPropagation(),
                                                children: (0, o.jsx) (
                                                  'div',
                                                  {
                                                    className: ''.concat(h().img, ' ').concat(U ? 'skeleton' : null),
                                                    children: (0, o.jsx) (
                                                      E.LazyLoadImage,
                                                      {
                                                        src: ''.concat(
                                                          W ? '/images/fallback_person.jpg' : (null == e ? void 0 : e.still_path) !== null &&
                                                          (null == e ? void 0 : e.still_path) !== void 0 ? 'https://image.tmdb.org/t/p/original'.replace('/original', '/w342') + (null == e ? void 0 : e.still_path) : '/images/fallback_person.jpg'
                                                        ),
                                                        height: '100%',
                                                        width: '100%',
                                                        useIntersectionObserver: !0,
                                                        effect: 'opacity',
                                                        className: ''.concat(h().img, ' ').concat(U ? 'skeleton' : null),
                                                        onLoad: () => {
                                                          H(!1)
                                                        },
                                                        onError: e => {
                                                          K(!0),
                                                          H(!1)
                                                        },
                                                        loading: 'lazy'
                                                      },
                                                      null == e ? void 0 : e.id
                                                    )
                                                  }
                                                )
                                              }
                                            ),
                                            (0, o.jsxs) (
                                              'div',
                                              {
                                                className: h().details,
                                                children: [
                                                  (0, o.jsxs) (
                                                    'h4',
                                                    {
                                                      children: [
                                                        'EP '.concat(e.episode_number),
                                                        ''.concat((null == e ? void 0 : e.name) ? ' : ' + (null == e ? void 0 : e.name) : null)
                                                      ]
                                                    }
                                                  ),
                                                  (0, o.jsxs) (
                                                    'p',
                                                    {
                                                      style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '.5rem',
                                                        flexWrap: 'wrap'
                                                      },
                                                      children: [
                                                        (null == e ? void 0 : e.vote_average) > 0 ? null == e ? void 0 : e.vote_average.toFixed(1) : (0, o.jsx) (_.QJe, {
                                                        }),
                                                        (null == e ? void 0 : e.runtime) >= 60 ? ' • '.concat(Math.floor((null == e ? void 0 : e.runtime) / 60), 'hr ').concat(
                                                          (null == e ? void 0 : e.runtime) % 60 ? ''.concat(((null == e ? void 0 : e.runtime) % 60).toFixed(0), 'min') : ''
                                                        ) : null,
                                                        (null == e ? void 0 : e.runtime) < 60 &&
                                                        (null == e ? void 0 : e.runtime) > 0 ? ' • '.concat(((null == e ? void 0 : e.runtime) % 60).toFixed(0), 'min') : null,
                                                        new Date(null == e ? void 0 : e.air_date) >= new Date ? (0, o.jsx) (
                                                          'span',
                                                          {
                                                            className: h().notAiredTag,
                                                            children: ' • '.concat(new Date(null == e ? void 0 : e.air_date).getDate(), ' ').concat(em[new Date(null == e ? void 0 : e.air_date).getMonth()], ' ').concat(new Date(null == e ? void 0 : e.air_date).getFullYear())
                                                          }
                                                        ) : null
                                                      ]
                                                    }
                                                  ),
                                                  (0, o.jsxs) (
                                                    y(),
                                                    {
                                                      className: ''.concat(h().links, ' btn'),
                                                      href: '/watch?type=tv&id='.concat(null == e ? void 0 : e.show_id, '&season=').concat(null == e ? void 0 : e.season_number, '&episode=').concat(null == e ? void 0 : e.episode_number),
                                                      onClick: e => e.stopPropagation(),
                                                      children: [
                                                        (0, o.jsx) (_.gmG, {
                                                        }),
                                                        ' Watch'
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      (0, o.jsx) (
                                        'p',
                                        {
                                          className: ''.concat(h().episodeOverview),
                                          children: null == e ? void 0 : e.overview
                                        }
                                      ),
                                      void 0 !== l &&
                                      0 !== l &&
                                      (0, o.jsx) (
                                        'div',
                                        {
                                          className: ''.concat(h().watchProgress),
                                          style: {
                                            width: ''.concat(l, '%')
                                          }
                                        }
                                      )
                                    ]
                                  },
                                  null == e ? void 0 : e.id
                                )
                              }
                            )
                          )
                        ]
                      }
                    ) : null,
                    'tv' === A &&
                    'episodes' === O &&
                    (
                      null == F ? void 0 : null === (i = F.episodes) ||
                      void 0 === i ? void 0 : i.length
                    ) === 0 ? (0, o.jsx) ('p', {
                      children: 'No Episodes Found'
                    }) : null,
                    'tv' === A &&
                    'episodes' === O &&
                    void 0 === F ? I.map(
                      e => (0, o.jsx) (
                        'div',
                        {
                          className: h().episode,
                          children: (0, o.jsx) (b.Z, {
                            height: 100,
                            className: h().CardSmall
                          })
                        }
                      )
                    ) : null,
                    (0, o.jsxs) (
                      'div',
                      {
                        className: h().categoryDetails,
                        children: [
                          (0, o.jsxs) (
                            'div',
                            {
                              className: h().casts,
                              children: [
                                'crew' === O &&
                                (0, o.jsxs) (
                                  o.Fragment,
                                  {
                                    children: [
                                      (0, o.jsxs) (
                                        'div',
                                        {
                                          className: h().header,
                                          children: [
                                            (0, o.jsx) ('h4', {
                                              children: 'S'.concat(M, 'E').concat(D)
                                            }),
                                            (null == F ? void 0 : null === (a = F.crew) || void 0 === a ? void 0 : a.length) !== 0 ? (0, o.jsx) ('p', {
                                              children: 'crew of this episode'
                                            }) : (0, o.jsx) ('p', {
                                              children: 'No crew found'
                                            })
                                          ]
                                        }
                                      ),
                                      null == F ? void 0 : null === (r = F.crew) ||
                                      void 0 === r ? void 0 : r.map(
                                        e => (0, o.jsxs) (
                                          'div',
                                          {
                                            className: h().cast,
                                            children: [
                                              (0, o.jsx) (
                                                y(),
                                                {
                                                  href: '/person?id='.concat(null == e ? void 0 : e.id),
                                                  className: h().CardSmall,
                                                  children: (0, o.jsx) (
                                                    'div',
                                                    {
                                                      className: ''.concat(h().img, ' ').concat(U ? 'skeleton' : null),
                                                      children: (0, o.jsx) (
                                                        E.LazyLoadImage,
                                                        {
                                                          src: ''.concat(
                                                            W ? '/images/fallback_person.jpg' : (null == e ? void 0 : e.profile_path) !== null &&
                                                            (null == e ? void 0 : e.profile_path) !== void 0 ? 'https://image.tmdb.org/t/p/original'.replace('/original', '/w185') + (null == e ? void 0 : e.profile_path) : '/images/fallback_person.jpg'
                                                          ),
                                                          height: '100%',
                                                          width: '100%',
                                                          useIntersectionObserver: !0,
                                                          effect: 'opacity',
                                                          className: ''.concat(h().img, ' ').concat(U ? 'skeleton' : null),
                                                          onLoad: () => {
                                                            H(!1)
                                                          },
                                                          onError: e => {
                                                            K(!0),
                                                            H(!1)
                                                          },
                                                          loading: 'lazy'
                                                        },
                                                        null == e ? void 0 : e.id
                                                      )
                                                    }
                                                  )
                                                }
                                              ),
                                              (0, o.jsxs) (
                                                'div',
                                                {
                                                  className: h().castName,
                                                  children: [
                                                    (0, o.jsx) ('h4', {
                                                      children: null == e ? void 0 : e.name
                                                    }),
                                                    (0, o.jsx) (
                                                      'p',
                                                      {
                                                        children: (null == e ? void 0 : e.character) ||
                                                        (null == e ? void 0 : e.job)
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ]
                                          },
                                          null == e ? void 0 : e.id
                                        )
                                      )
                                    ]
                                  }
                                ),
                                'crew' === O &&
                                void 0 === F &&
                                I.map(
                                  e => (0, o.jsxs) (
                                    'div',
                                    {
                                      className: h().cast,
                                      children: [
                                        (0, o.jsx) (b.Z, {
                                          height: 100,
                                          width: 100
                                        }),
                                        (0, o.jsx) (b.Z, {
                                          height: 20,
                                          width: 50
                                        })
                                      ]
                                    }
                                  )
                                )
                              ]
                            }
                          ),
                          (0, o.jsxs) (
                            'div',
                            {
                              className: h().casts,
                              children: [
                                'guests' === O &&
                                (0, o.jsxs) (
                                  o.Fragment,
                                  {
                                    children: [
                                      (0, o.jsxs) (
                                        'div',
                                        {
                                          className: h().header,
                                          children: [
                                            (0, o.jsx) ('h4', {
                                              children: 'S'.concat(M, 'E').concat(D)
                                            }),
                                            (
                                              null == F ? void 0 : null === (s = F.guest_stars) ||
                                              void 0 === s ? void 0 : s.length
                                            ) !== 0 ? (0, o.jsx) ('p', {
                                              children: 'guest stars in this episode'
                                            }) : (0, o.jsx) ('p', {
                                              children: 'No notable guest star in this episode '
                                            })
                                          ]
                                        }
                                      ),
                                      null == F ? void 0 : null === (c = F.guest_stars) ||
                                      void 0 === c ? void 0 : c.map(
                                        e => (0, o.jsxs) (
                                          'div',
                                          {
                                            className: h().cast,
                                            children: [
                                              (0, o.jsx) (
                                                y(),
                                                {
                                                  href: '/person?id='.concat(null == e ? void 0 : e.id),
                                                  className: h().CardSmall,
                                                  children: (0, o.jsx) (
                                                    'div',
                                                    {
                                                      className: ''.concat(h().img, ' ').concat(U ? 'skeleton' : null),
                                                      children: (0, o.jsx) (
                                                        E.LazyLoadImage,
                                                        {
                                                          src: ''.concat(
                                                            W ? '/images/fallback_person.jpg' : (null == e ? void 0 : e.profile_path) !== null &&
                                                            (null == e ? void 0 : e.profile_path) !== void 0 ? 'https://image.tmdb.org/t/p/original'.replace('/original', '/w185') + (null == e ? void 0 : e.profile_path) : '/images/fallback_person.jpg'
                                                          ),
                                                          height: '100%',
                                                          width: '100%',
                                                          useIntersectionObserver: !0,
                                                          effect: 'opacity',
                                                          className: ''.concat(h().img, ' ').concat(U ? 'skeleton' : null),
                                                          onLoad: () => {
                                                            H(!1)
                                                          },
                                                          onError: e => {
                                                            K(!0),
                                                            H(!1)
                                                          },
                                                          loading: 'lazy'
                                                        },
                                                        null == e ? void 0 : e.id
                                                      )
                                                    }
                                                  )
                                                }
                                              ),
                                              (0, o.jsxs) (
                                                'div',
                                                {
                                                  className: h().castName,
                                                  children: [
                                                    (0, o.jsx) ('h4', {
                                                      children: null == e ? void 0 : e.name
                                                    }),
                                                    (0, o.jsx) (
                                                      'p',
                                                      {
                                                        children: (null == e ? void 0 : e.character) ||
                                                        (null == e ? void 0 : e.job)
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ]
                                          },
                                          null == e ? void 0 : e.id
                                        )
                                      )
                                    ]
                                  }
                                ),
                                'guests' === O &&
                                void 0 === F &&
                                I.map(
                                  e => (0, o.jsxs) (
                                    'div',
                                    {
                                      className: h().cast,
                                      children: [
                                        (0, o.jsx) (b.Z, {
                                          height: 100,
                                          width: 100
                                        }),
                                        (0, o.jsx) (b.Z, {
                                          height: 20,
                                          width: 50
                                        })
                                      ]
                                    }
                                  )
                                )
                              ]
                            }
                          ),
                          (0, o.jsxs) (
                            'div',
                            {
                              className: h().MovieList,
                              children: [
                                (0, o.jsx) (
                                  o.Fragment,
                                  {
                                    children: 'related' === O &&
                                    (
                                      null == F ? void 0 : null === (d = F.results) ||
                                      void 0 === d ? void 0 : d.map(
                                        e => (0, o.jsx) (w.Z, {
                                          data: e,
                                          media_type: A,
                                          genresMovie: et,
                                          genresTv: eo
                                        })
                                      )
                                    )
                                  }
                                ),
                                'related' === O &&
                                (null == F ? void 0 : null === (u = F.results) || void 0 === u ? void 0 : u.length) === 0 &&
                                (0, o.jsx) ('p', {
                                  children: 'No Recommendations'
                                }),
                                'related' === O &&
                                void 0 === F &&
                                I.map(
                                  e => (0, o.jsxs) (
                                    'div',
                                    {
                                      className: h().MovieList,
                                      children: [
                                        (0, o.jsx) (b.Z, {
                                          height: 150,
                                          width: 100
                                        }),
                                        (0, o.jsxs) (
                                          'div',
                                          {
                                            children: [
                                              (0, o.jsx) (b.Z, {
                                                height: 20,
                                                width: 150
                                              }),
                                              (0, o.jsx) (b.Z, {
                                                height: 20,
                                                width: 150
                                              }),
                                              (0, o.jsx) (b.Z, {
                                                height: 20,
                                                width: 150
                                              })
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  )
                                )
                              ]
                            }
                          ),
                          (0, o.jsxs) (
                            'div',
                            {
                              className: h().MovieList,
                              children: [
                                (0, o.jsxs) (
                                  o.Fragment,
                                  {
                                    children: [
                                      'similar' === O &&
                                      (
                                        null == F ? void 0 : null === (v = F.results) ||
                                        void 0 === v ? void 0 : v.map(
                                          e => (0, o.jsx) (w.Z, {
                                            data: e,
                                            media_type: A,
                                            genresMovie: et,
                                            genresTv: eo
                                          })
                                        )
                                      ),
                                      ('related' === O || 'similar' === O) &&
                                      (null == F ? void 0 : null === (m = F.results) || void 0 === m ? void 0 : m.length) > 0 &&
                                      (0, o.jsxs) (
                                        o.Fragment,
                                        {
                                          children: [
                                            'true' == ea &&
                                            Q + 1 <= X ? (0, o.jsxs) (
                                              'div',
                                              {
                                                ref: ev,
                                                className: h().loadMore,
                                                children: [
                                                  ' ',
                                                  (0, o.jsx) (C.Z, {
                                                  }),
                                                  ' '
                                                ]
                                              }
                                            ) : null,
                                            'true' == ea &&
                                            Q >= X ? (0, o.jsx) ('div', {
                                              className: h().loadMore,
                                              children: ' End Of Result '
                                            }) : null,
                                            'true' == ea ? null : (0, o.jsx) (
                                              S(),
                                              {
                                                containerClassName: h().pagination,
                                                pageClassName: h().page_item,
                                                activeClassName: h().paginateActive,
                                                onPageChange: e => {
                                                  Y(e.selected + 1),
                                                  console.log({
                                                    event: e
                                                  }),
                                                  Q > X &&
                                                  Y(X),
                                                  eh()
                                                },
                                                initialPage: 0,
                                                pageCount: X,
                                                breakLabel: ' ... ',
                                                previousLabel: (0, o.jsx) (j._u0, {
                                                  className: h().paginationIcons
                                                }),
                                                nextLabel: (0, o.jsx) (j.bBv, {
                                                  className: h().paginationIcons
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                'similar' === O &&
                                (null == F ? void 0 : null === (f = F.results) || void 0 === f ? void 0 : f.length) === 0 &&
                                (0, o.jsx) ('p', {
                                  children: 'No Recommendations'
                                }),
                                'similar' === O &&
                                void 0 === F &&
                                I.map(
                                  e => (0, o.jsxs) (
                                    'div',
                                    {
                                      className: h().MovieList,
                                      children: [
                                        (0, o.jsx) (b.Z, {
                                          height: 150,
                                          width: 100
                                        }),
                                        (0, o.jsxs) (
                                          'div',
                                          {
                                            children: [
                                              (0, o.jsx) (b.Z, {
                                                height: 20,
                                                width: 150
                                              }),
                                              (0, o.jsx) (b.Z, {
                                                height: 20,
                                                width: 150
                                              }),
                                              (0, o.jsx) (b.Z, {
                                                height: 20,
                                                width: 150
                                              })
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  )
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      },
      A = l(78695),
      T = l(42020),
      M = l(71708),
      D = l(93041),
      R = l(54312);
      async function O(e, t) {
        try {
          let l = document.createElement('a');
          l.href = e,
          l.download = t ||
          'video.mp4',
          l.target = '_blank',
          document.body.appendChild(l),
          l.click(),
          l.remove(),
          v.Am.info('Download started')
        } catch (e) {
          console.error('Error downloading video:', e),
          v.Am.error('Error downloading video')
        }
      }
      let q = /^(?:en|eng|english)(?:[-_.\s][a-z0-9]+)*$/i,
      F = /\b(?:english|eng)\b/i,
      Z = /^(?:en)(?:[-_ (\[\].]|$)/i,
      U = /(?:subt[ií]tulos|legendas|audio)\s+en\s+(?:español|espanol|franc[eé]s|portugu[eê]s|italiano|deutsch)/i,
      H = /[._\-/\[(](?:en|eng|english)(?:[-_][a-z0-9]+)?\.(?:srt|vtt|sub|ass|ssa)$/i,
      B = /[._\-/\[(](?:en|eng|english)(?:[-_][a-z0-9]+)?(?:\.[a-z0-9]+|\/|$)/i;
      function z(e) {
        if (!e || 'object' != typeof e) return !1;
        let t = (e.language || e.lang || '').toString().trim();
        if (t && q.test(t)) return !0;
        let l = (e.label || e.display || e.name || e.html || '').toString().trim();
        if (l) {
          if (U.test(l)) return !1;
          if (F.test(l) || Z.test(l)) return !0
        }
        let o = (e.file || e.url || e.src || '').toString().trim();
        if (o) {
          let e = o.split('?') [0].split('#') [0];
          if (H.test(e) || B.test(e)) return !0
        }
        return !1
      }
      function V(e) {
        let t,
        {
          url: l,
          server: i,
          captions: a,
          onlineSubtitles: r,
          getInstance: s,
          format: c,
          id: d,
          data: u,
          type: m,
          season: h,
          episode: g,
          nextBtn: f,
          ...y
        }
        = e,
        w = 'https://proxy.valhallastream.com/m3u8?url=',
        _ = (0, n.useRef) (),
        b = (0, n.useRef) (null),
        x = (0, n.useRef) (null),
        [
          S,
          j
        ] = (0, n.useState) (!1),
        [
          E,
          N
        ] = (0, n.useState) (!0),
        [
          C,
          I
        ] = (0, n.useState) (!0),
        [
          P,
          q
        ] = (0, n.useState) (!0),
        F = (0, n.useRef) (1),
        Z = (0, n.useRef) (0),
        U = (0, n.useRef) (1),
        H = (0, n.useRef) (1);
        async function B(e, t) {
          let o = Date.now();
          if (o - Z.current < 4000) return;
          Z.current = o;
          let n = i ||
          'server';
          if (1 === e.current) v.Am.info('Retrying '.concat(n, ' (Attempt 2/2)...')),
          e.current = 0,
          setTimeout(
            () => {
              var e;
              t &&
              (null === (e = t.template) || void 0 === e ? void 0 : e.$video) &&
              (
                'hls' === c ? V(t.template.$video, l, t) : t.switchUrl &&
                t.switchUrl(l)
              )
            },
            3500
          );
           else if (
            0 === e.current &&
            (
              e.current = - 1,
              (null == y ? void 0 : y.onServerError) &&
              y.onServerError(),
              t
            )
          ) {
            let e = await(0, R.l) (u, h, g, t, window, i, S);
            (0, p.Z) ({
              requestID: 'observability',
              service: e
            })
          }
        }
        function V(e, t, l) {
          if (D.default.isSupported()) {
            l.hls &&
            l.hls.destroy();
            let n = new D.default({
              autoStartLoad: !0,
              startFragPrefetch: !0,
              maxBufferLength: 600,
              maxMaxBufferLength: 1800,
              maxBufferSize: 500000000,
              appendErrorMaxRetry: 20,
              fragLoadPolicy: {
              default:
                {
                  maxTimeToFirstByteMs: 5000,
                  maxLoadTimeMs: 120000,
                  timeoutRetry: {
                    maxNumRetry: 10,
                    retryDelayMs: 1000,
                    maxRetryDelayMs: 5000
                  },
                  errorRetry: {
                    maxNumRetry: 10,
                    retryDelayMs: 1000,
                    maxRetryDelayMs: 5000
                  }
                }
              },
              highBufferWatchdogPeriod: 60,
              lowLatencyMode: !1
            });
            var o = 0;
            n.on(
              D.default.Events.ERROR,
              function (e, t) {
                if (t.fatal) switch (console.log(t), t.type) {
                  case D.default.ErrorTypes.MEDIA_ERROR:
                    'fragParsingError' == t.details &&
                    (
                      o > 2 ? (l.notice.show = 'Invalid Chunk Data', B(F, l)) : (
                        console.log('fatal media error encountered, try to recover ' + o),
                        o += 1,
                        n.recoverMediaError()
                      )
                    );
                    break;
                  case D.default.ErrorTypes.NETWORK_ERROR:
                    l.notice.show = t.details,
                    B(F, l);
                    break;
                  default:
                    console.log(t),
                    l.notice.show = t.details,
                    B(F, l)
                } else o = 0
              }
            ),
            n.loadSource(t),
            n.attachMedia(e),
            l.hls = n,
            x.current = n,
            l.on(
              'destroy',
              () => {
                try {
                  n.stopLoad(),
                  n.detachMedia(),
                  n.destroy()
                } catch (e) {
                }
              }
            )
          } else e.canPlayType('application/vnd.apple.mpegurl') ? e.src = t : l.notice.show = 'Unsupported playback format: m3u8'
        }
        function $(e) {
          let t = e.currentTime,
          l = t / e.duration * 100;
          0 === t ||
          Number.isNaN(l) ? console.log('Progress not saved:', t, l) : (
            100 == l ? (0, L.Nm) ({
              id: d,
              type: m,
              season: h,
              episode: g,
              watchTime: 0,
              watchPercentage: l
            }) : (0, L.Nm) ({
              id: d,
              type: m,
              season: h,
              episode: g,
              watchTime: t,
              watchPercentage: l
            }),
            console.log('Progress saved:', t, l)
          )
        }
        A.Z.REMOVE_SRC_WHEN_DESTROY = !0,
        A.Z.MOBILE_CLICK_PLAY = !0,
        (0, n.useEffect) (() => {
          F.current = 1,
          Z.current = 0
        }, [
          l
        ]),
        (0, n.useEffect) (() => {
          U.current = 1,
          H.current = 1
        }, [
          l,
          S
        ]);
        let G = function () {
          for (var e = arguments.length, l = Array(e), o = 0; o < e; o++) l[o] = arguments[o];
          t &&
          clearTimeout(t),
          t = setTimeout(() => $(...l), 1000)
        };
        return (0, n.useEffect) (
          () => {
            let e = (0, k.Gw) ();
            j((null == e ? void 0 : e.proxyModeStream) == 'm3u8Proxy')
          },
          []
        ),
        (0, n.useEffect) (
          () => {
            if (!_.current) return;
            let e = (0, k.Gw) (),
            t = (null == a ? void 0 : a.length) > 0 ? null == a ? void 0 : a.map(
              (e, t) => {
                let l = !1;
                return 0 !== U.current &&
                z(e) &&
                (l = !0, U.current = 0),
                {
                default:
                  l,
                  html: null == e ? void 0 : e.label,
                  url: null == e ? void 0 : e.file
                }
              }
            ) : [
              {
                html: 'No Captions',
                url: ''
              }
            ],
            o = (null == r ? void 0 : r.length) > 0 ? null == r ? void 0 : r.map(
              (e, t) => {
                var l;
                let o = !1;
                return 0 !== U.current &&
                z(e) &&
                (o = !0, U.current = 0),
                {
                default:
                  o,
                  html: (null == e ? void 0 : e.display) ||
                  (
                    null == e ? void 0 : null === (l = e.language) ||
                    void 0 === l ? void 0 : l.toUpperCase()
                  ),
                  url: (null == e ? void 0 : e.url) ||
                  (null == e ? void 0 : e.file),
                  type: (null == e ? void 0 : e.type) ||
                  (null == e ? void 0 : e.format)
                }
              }
            ) : [
              {
                html: 'No Captions',
                url: ''
              }
            ];
            A.Z.MOBILE_CLICK_PLAY = !0;
            let n = new A.Z({
              url: l,
              container: _.current,
              setting: !0,
              fullscreen: !0,
              autoOrientation: !0,
              flip: !0,
              pip: !0,
              playbackRate: !0,
              fastForward: !0,
              lock: !0,
              aspectRatio: !0,
              type: 'hls' === c ? 'm3u8' : 'mp4',
              airplay: !0,
              mutex: !0,
              subtitleOffset: !0,
              miniProgressBar: (null == e ? void 0 : e.miniProgressbar) === 'true',
              playsInline: !0,
              autoplay: !0,
              autoPlayback: !0,
              hotkey: !0,
              screenshot: !1,
              poster: 'https://image.tmdb.org/t/p/original' + (null == u ? void 0 : u.backdrop_path),
              customType: 'hls' === c ? {
                m3u8: V
              }
               : {
              },
              subtitle: {
                type: 'srt',
                encoding: 'utf-8',
                escape: !1
              },
              controls: (null == e ? void 0 : e.PMPlacement) !== 'disable' ? [
                {
                  index: 2,
                  html: (null == u ? void 0 : u.name) ||
                  (null == u ? void 0 : u.title) ? '<div class="artplayer-details" style=align-items:'.concat(null == e ? void 0 : e.PMPlacement, ';><h2>').concat((null == u ? void 0 : u.name) || (null == u ? void 0 : u.title) || '', '</h2>').concat(
                    'movie' === m ? '<p>Movie</p>' : '<p>Show • S'.concat(h, ' • E').concat(g, '</p>'),
                    '</div>'
                  ) : '',
                  position: 'top',
                  click: function () {
                    console.log({
                      id: d
                    })
                  }
                },
                {
                  position: 'right',
                  html: '<img src="/images/player/download.svg" alt="download" class="artplayerDownloadBtn"/>',
                  tooltip: 'Download',
                  click: function () {
                    'hls' === c ? window.open(
                      'movie' === m ? '/download?type='.concat(m, '&id=').concat(d) : '/download?type='.concat(m, '&id=').concat(d, '&season=').concat(h, '&episode=').concat(g)
                    ) : O(
                      l,
                      ''.concat((null == u ? void 0 : u.name) || (null == u ? void 0 : u.title)).concat('movie' !== m ? '-S'.concat(h, '-E').concat(g) : '', '.mp4')
                    )
                  }
                }
              ] : [
                {
                  position: 'right',
                  html: '<img src="/images/player/download.svg" alt="download" class="artplayerDownloadBtn"/>',
                  tooltip: 'Download',
                  click: function () {
                    'hls' === c ? window.open(
                      'movie' === m ? '/download?type='.concat(m, '&id=').concat(d) : '/download?type='.concat(m, '&id=').concat(d, '&season=').concat(h, '&episode=').concat(g)
                    ) : O(
                      l,
                      ''.concat((null == u ? void 0 : u.name) || (null == u ? void 0 : u.title)).concat('movie' !== m ? '-S'.concat(h, '-E').concat(g) : '', '.mp4')
                    )
                  }
                }
              ],
              layers: [
                {
                  name: 'custom-controls',
                  html: '\n            <div class="custom-controls" id="custom-controls">\n              <button id="custom-backward" class="backward-btn" aria-label="Backward 10 seconds">\n                <img width="22" height="22" src="/images/player/backward.svg" alt="Backward">\n              </button>\n              <button id="custom-play-pause" class="play-pause-btn is-loading" aria-label="Play or Pause">\n                <img id="play-icon" width="40" height="40" src="/images/player/play.svg" alt="Loading" class="custom-play-pause">\n              </button>\n              <button id="custom-forward" class="forward-btn" aria-label="Forward 10 seconds">\n                <img width="22" height="22" src="/images/player/forward.svg" alt="Forward">\n              </button>\n            </div>\n          '
                }
              ],
              icons: {
                state: ''
              },
              settings: [
                {
                  html: 'Subtitle',
                  width: 250,
                  tooltip: '',
                  icon: '<img width="22" heigth="22" src="/images/player/captions.svg">',
                  selector: [
                    {
                      html: 'Display',
                      tooltip: 'Show',
                      switch : !0,
                        onSwitch: function (e) {
                          return e.tooltip = e.switch ? 'Hide' : 'Show',
                          n.subtitle.show = !e.switch,
                          !e.switch
                      }
                    },
                    {
                      id: 'loadSubtitle',
                      html: 'Upload Subtitle'
                    },
                    ...t
                  ],
                  onSelect: async function (e, t, l) {
                    if ('loadSubtitle' === e.id) {
                      let t = await new Promise(
                        t => {
                          let l = document.createElement('input');
                          l.type = 'file',
                          l.accept = '.srt,.vtt',
                          l.onchange = async function (l) {
                            var o,
                            i,
                            a,
                            r;
                            let s = null == l ? void 0 : null === (o = l.target) ||
                            void 0 === o ? void 0 : o.files[0];
                            if (s) {
                              let l = new FileReader;
                              l.onload = function (e) {
                                var t;
                                let l = null == e ? void 0 : null === (t = e.target) ||
                                void 0 === t ? void 0 : t.result;
                                n.subtitle.url = URL.createObjectURL(new Blob([l], {
                                  type: 'text/vtt'
                                })),
                                n.subtitle.encoding = 'utf-8',
                                n.subtitle.escape = !1,
                                n.subtitle.show = !0,
                                n.notice.show = 'Loaded Subtitle: '.concat(null == s ? void 0 : s.name)
                              },
                              l.readAsText(s),
                              console.log({
                                file: s
                              }),
                              e.tooltip = (null == s ? void 0 : null === (i = s.name) || void 0 === i ? void 0 : i.length) > 10 ? ''.concat(
                                null == s ? void 0 : null === (a = s.name) ||
                                void 0 === a ? void 0 : a.slice(0, 8),
                                '...'
                              ).concat(null == s ? void 0 : null === (r = s.name) || void 0 === r ? void 0 : r.slice( - 5)) : (null == s ? void 0 : s.name) ||
                              'custom',
                              t(null == s ? void 0 : s.name)
                            } else t('No file selected')
                          },
                          l.click()
                        }
                      );
                      return (null == t ? void 0 : t.length) > 10 ? ''.concat(null == t ? void 0 : t.slice(0, 8), '...').concat(null == t ? void 0 : t.slice( - 5)) : t ||
                      'custom'
                    }
                    return console.info(e, t, l),
                    n.subtitle.url = null == e ? void 0 : e.url,
                    n.subtitle.escape = !1,
                    null == e ? void 0 : e.html
                  }
                },
                {
                  html: 'OpenSubtitle',
                  width: 250,
                  tooltip: '',
                  icon: '<img width="22" heigth="22" src="/images/player/captions.svg">',
                  selector: [
                    {
                      html: 'Display',
                      tooltip: 'Show',
                      switch : !0,
                        onSwitch: function (e) {
                          return e.tooltip = e.switch ? 'Hide' : 'Show',
                          n.subtitle.show = !e.switch,
                          !e.switch
                      }
                    },
                    ...o
                  ],
                  onSelect: function (e) {
                    return n.subtitle.url = null == e ? void 0 : e.url,
                    n.subtitle.type = null == e ? void 0 : e.type,
                    n.subtitle.encoding = 'utf-8',
                    n.subtitle.escape = !1,
                    null == e ? void 0 : e.html
                  }
                },
                {
                  html: 'Audio Boost',
                  tooltip: '1x',
                  icon: '<img width="22" height="22" src="/images/player/speaker.svg">',
                  range: [
                    1,
                    1,
                    6,
                    0.5
                  ],
                  onChange: function (e, t, l) {
                    var o;
                    console.info(e, t, l);
                    let i = (null == e ? void 0 : null === (o = e.range) || void 0 === o ? void 0 : o[0]) ||
                    (null == e ? void 0 : e.range);
                    return 'mp4' == c ? (
                      n.gainNode &&
                      (n.gainNode.gain.value = 1),
                      n.notice.show = 'Audio boost not supported for this media',
                      '1x'
                    ) : (
                      n.audioContext ||
                      (
                        n.audioContext = new (window.AudioContext || window.webkitAudioContext),
                        n.sourceNode = n.audioContext.createMediaElementSource(n.video),
                        n.gainNode = n.audioContext.createGain(),
                        n.sourceNode.connect(n.gainNode),
                        n.gainNode.connect(n.audioContext.destination)
                      ),
                      n.gainNode.gain.value = i,
                      n.notice.show = 'Audio: '.concat(i, 'x'),
                      i + 'x'
                    )
                  }
                },
                {
                  html: 'Watch Party',
                  width: 250,
                  height: 500,
                  icon: '<img src="/images/player/person.svg" alt="person"/>',
                  selector: [
                    {
                      html: 'watchparty.me',
                      url: 'https://www.watchparty.me/create?video=' + l
                    }
                  ],
                  onSelect: function (e) {
                    let t = 'https://www.watchparty.me/create?video='.concat(
                      S ? encodeURIComponent(w + encodeURIComponent(l)) : encodeURIComponent(l)
                    ),
                    o = new MouseEvent('click', {
                      bubbles: !0,
                      cancelable: !0,
                      view: window
                    }),
                    n = document.createElement('a');
                    return n.href = t,
                    n.target = '_blank',
                    n.dispatchEvent(o),
                    null == e ? void 0 : e.html
                  }
                },
                {
                  html: 'Download',
                  width: 250,
                  height: 500,
                  icon: '<img src="/images/player/download.svg" alt="download"/>',
                  selector: 'hls' === c ? [
                    {
                      html: 'HLSForge (Recommended)',
                      url: l,
                      opt: 1
                    },
                    {
                      html: 'Rive Download',
                      url: l,
                      opt: 2
                    },
                    {
                      html: 'Download HLS (mediatools)',
                      url: l,
                      opt: 3
                    },
                    {
                      html: 'Download HLS (thetuhin)',
                      url: l,
                      opt: 4
                    }
                  ] : [
                    {
                      html: 'Download MP4',
                      url: l,
                      opt: 5
                    },
                    {
                      html: 'Rive Download',
                      url: l,
                      opt: 2
                    }
                  ],
                  onSelect: function (e) {
                    var t,
                    o,
                    n,
                    i;
                    if (1 === e.opt) {
                      let e = 'https://hlsforge.net/?url='.concat(
                        S ? encodeURIComponent(w + encodeURIComponent(l)) : encodeURIComponent(l),
                        '&id='
                      ).concat(d).concat(
                        'tv' === m ? '&season='.concat(h, '&episode=').concat(g) : '',
                        '&title='
                      ).concat(
                        (null == u ? void 0 : u.name) ||
                        (null == u ? void 0 : u.title),
                        '&downloadTitle='
                      ).concat((null == u ? void 0 : u.name) || (null == u ? void 0 : u.title)).concat('movie' !== m ? '-'.concat(h, '-').concat(g) : ''),
                      t = new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                      }),
                      o = document.createElement('a');
                      o.href = e,
                      o.target = '_blank',
                      o.dispatchEvent(t)
                    }
                    if (2 === e.opt) {
                      let e = 'movie' === m ? '/download?type='.concat(m, '&id=').concat(d) : '/download?type='.concat(m, '&id=').concat(d, '&season=').concat(h, '&episode=').concat(g),
                      t = new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                      }),
                      l = document.createElement('a');
                      l.href = e,
                      l.target = '_blank',
                      l.dispatchEvent(t)
                    }
                    if (3 === e.opt) {
                      let e = 'https://mediatools.cc/hlsDownloader?query='.concat(
                        S ? encodeURIComponent(w + encodeURIComponent(l)) : encodeURIComponent(l)
                      ),
                      t = new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                      }),
                      o = document.createElement('a');
                      o.href = e,
                      o.target = '_blank',
                      o.dispatchEvent(t)
                    }
                    if (4 === e.opt) {
                      null === (o = navigator) ||
                      void 0 === o ||
                      null === (t = o.clipboard) ||
                      void 0 === t ||
                      t.writeText(S ? w + encodeURIComponent(l) : encodeURIComponent(l));
                      let e = 'https://hlsdownloader.thetuhin.com/?text='.concat(
                        S ? encodeURIComponent(w + encodeURIComponent(l)) : encodeURIComponent(l)
                      ),
                      n = new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                      }),
                      i = document.createElement('a');
                      i.href = e,
                      i.target = '_blank',
                      i.dispatchEvent(n)
                    }
                    if (5 === e.opt) {
                      null === (i = navigator) ||
                      void 0 === i ||
                      null === (n = i.clipboard) ||
                      void 0 === n ||
                      n.writeText(l);
                      let e = ''.concat(l),
                      t = new MouseEvent('click', {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                      }),
                      o = document.createElement('a');
                      o.href = e,
                      o.target = '_blank',
                      o.dispatchEvent(t)
                    }
                    return null == e ? void 0 : e.html
                  }
                }
              ],
              plugins: 'hls' === c ? [
                (0, T.Z) ({
                  quality: {
                    setting: !0,
                    getName: e => e.height + 'P',
                    title: 'Quality',
                    auto: 'Auto'
                  },
                  audio: {
                    setting: !0,
                    getName: e => e.name,
                    title: 'Language',
                    auto: 'Auto'
                  }
                }),
                (0, M.Z) ({
                  sdk: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1',
                  mimeType: 'application/x-mpegURL'
                })
              ] : [
                (0, M.Z) ({
                  sdk: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1',
                  mimeType: 'video/mp4'
                })
              ]
            });
            b.current = n,
            s &&
            'function' == typeof s &&
            s(n);
            let i = _.current,
            p = null == i ? void 0 : i.querySelector('#custom-controls'),
            y = null == i ? void 0 : i.querySelector('#custom-play-pause'),
            j = null == i ? void 0 : i.querySelector('#play-icon'),
            E = null == i ? void 0 : i.querySelector('#custom-backward'),
            C = null == i ? void 0 : i.querySelector('#custom-forward'),
            P = !1,
            D = !0,
            R = !1,
            Z = function () {
              let e = arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0];
              if (n && !R) {
                R = !0;
                try {
                  var t,
                  l;
                  let o = null === (t = n.template) ||
                  void 0 === t ? void 0 : t.$video;
                  !P &&
                  o &&
                  (o.readyState >= 3 || n.playing) &&
                  (P = !0);
                  let i = o ? o.paused : null === (l = n.paused) ||
                  void 0 === l ||
                  l,
                  a = !P ||
                  !i &&
                  D;
                  if (
                    I(a),
                    N(i),
                    n.loading &&
                    n.loading.show !== a &&
                    (n.loading.show = a),
                    y &&
                    (
                      a ? y.classList.add('is-loading') : y.classList.remove('is-loading')
                    ),
                    j
                  ) {
                    let t = i ? '/images/player/play.svg' : '/images/player/pause.svg',
                    l = i ? 'Play' : 'Pause';
                    j.getAttribute('src') !== t &&
                    (j.src = t, j.alt = l),
                    e &&
                    !a &&
                    (
                      j.style.transform = 'scale(1.3)',
                      j.style.opacity = '0.7',
                      setTimeout(() => {
                        j &&
                        (j.style.transform = '', j.style.opacity = '')
                      }, 250)
                    )
                  }
                } finally {
                  R = !1
                }
              }
            };
            Z(!1);
            let J = e => {
              var t;
              e.preventDefault(),
              e.stopPropagation(),
              n.playing ||
              (null === (t = n.template) || void 0 === t ? void 0 : t.$video) &&
              !n.template.$video.paused ? n.pause() : n.play()
            };
            null == y ||
            y.addEventListener('click', J),
            n.on('video:loadstart', () => {
              D = !0,
              Z()
            }),
            n.on('video:waiting', () => {
              D = !0,
              Z()
            }),
            n.on('video:seeking', () => {
              D = !0,
              Z()
            }),
            n.on(
              'video:stalled',
              () => {
                !n.paused &&
                n.currentTime < n.duration &&
                (D = !0, Z())
              }
            ),
            n.on('loading', e => {
              D = e,
              Z()
            }),
            n.on('video:playing', () => {
              P = !0,
              D = !1,
              Z()
            }),
            n.on('video:canplay', () => {
              P = !0,
              D = !1,
              Z()
            }),
            n.on(
              'video:loadeddata',
              () => {
                var e,
                t;
                (
                  null === (t = n.template) ||
                  void 0 === t ? void 0 : null === (e = t.$video) ||
                  void 0 === e ? void 0 : e.readyState
                ) >= 2 &&
                (P = !0),
                Z()
              }
            ),
            n.on(
              'video:seeked',
              () => {
                var e,
                t;
                (
                  null === (t = n.template) ||
                  void 0 === t ? void 0 : null === (e = t.$video) ||
                  void 0 === e ? void 0 : e.readyState
                ) >= 3 &&
                (D = !1),
                Z()
              }
            ),
            n.on(
              'play',
              () => {
                var e;
                let t = !(null === (e = n.template) || void 0 === e ? void 0 : e.$video) ||
                n.template.$video.readyState < 3;
                D = t,
                Z(!t)
              }
            ),
            n.on('pause', () => {
              D = !1,
              Z(!0)
            }),
            n.on(
              'control',
              e => {
                q(e),
                p &&
                (
                  e ? p.classList.remove('is-hidden') : p.classList.add('is-hidden')
                )
              }
            );
            let W = e => {
              e.preventDefault(),
              e.stopPropagation(),
              n.backward = 10,
              E &&
              (
                E.style.transform = 'scale(1.3)',
                E.style.opacity = '0.7',
                setTimeout(() => {
                  E &&
                  (E.style.transform = '', E.style.opacity = '')
                }, 250)
              )
            };
            null == E ||
            E.addEventListener('click', W);
            let K = e => {
              e.preventDefault(),
              e.stopPropagation(),
              n.forward = 10,
              C &&
              (
                C.style.transform = 'scale(1.3)',
                C.style.opacity = '0.7',
                setTimeout(() => {
                  C &&
                  (C.style.transform = '', C.style.opacity = '')
                }, 250)
              )
            };
            null == C ||
            C.addEventListener('click', K),
            n.on(
              'ready',
              () => {
                var t,
                l;
                n.notice.show = 'Video Ready To Play',
                (
                  null === (l = n.template) ||
                  void 0 === l ? void 0 : null === (t = l.$video) ||
                  void 0 === t ? void 0 : t.readyState
                ) &&
                n.template.$video.readyState >= 2 &&
                (P = !0),
                Z(),
                function (e) {
                  let t = (0, L.T_) ({
                    type: m,
                    id: d,
                    season: h,
                    episode: g
                  });
                  t &&
                  t.watchTime ? (
                    e.currentTime = t.watchTime,
                    console.log('Resumed at '.concat(t.watchTime, ' seconds'))
                  ) : console.log('No saved progress found, starting from the beginning.')
                }(n),
                (null == a ? void 0 : a.length) > 0 &&
                (
                  null == a ||
                  a.map(
                    (t, l) => {
                      var o;
                      let i = !1;
                      return 0 !== H.current &&
                      (null == e ? void 0 : e.PASSelection) !== 'false' &&
                      z(t) &&
                      (
                        i = !0,
                        H.current = 0,
                        n.subtitle.url = (null == t ? void 0 : t.file) ||
                        (null == t ? void 0 : t.url),
                        n.subtitle.type = (null == t ? void 0 : t.type) ||
                        'srt',
                        n.subtitle.encoding = 'utf-8',
                        n.subtitle.escape = !1
                      ),
                      {
                      default:
                        i,
                        html: (null == t ? void 0 : t.label) ||
                        (null == t ? void 0 : t.display) ||
                        (
                          null == t ? void 0 : null === (o = t.label) ||
                          void 0 === o ? void 0 : o.toUpperCase()
                        ),
                        url: (null == t ? void 0 : t.file) ||
                        (null == t ? void 0 : t.url),
                        type: (null == t ? void 0 : t.type) ||
                        'srt'
                      }
                    }
                  )
                ),
                (null == r ? void 0 : r.length) > 0 &&
                (
                  null == r ||
                  r.map(
                    (t, l) => {
                      var o;
                      let i = !1;
                      return 0 !== H.current &&
                      (null == e ? void 0 : e.PASSelection) !== 'false' &&
                      z(t) &&
                      (
                        i = !0,
                        H.current = 0,
                        n.subtitle.url = (null == t ? void 0 : t.url) ||
                        (null == t ? void 0 : t.file),
                        n.subtitle.type = (null == t ? void 0 : t.type) ||
                        'srt',
                        n.subtitle.encoding = 'utf-8',
                        n.subtitle.escape = !1
                      ),
                      {
                      default:
                        i,
                        html: (null == t ? void 0 : t.display) ||
                        (
                          null == t ? void 0 : null === (o = t.language) ||
                          void 0 === o ? void 0 : o.toUpperCase()
                        ),
                        url: (null == t ? void 0 : t.url) ||
                        (null == t ? void 0 : t.file),
                        type: null == t ? void 0 : t.type
                      }
                    }
                  )
                )
              }
            ),
            n.on(
              'error',
              (e, t) => {
                n.notice.show = 'Video Load Error',
                B(F, n),
                console.info(e, t)
              }
            ),
            n.on(
              'video:error',
              (e, t) => {
                n.notice.show = 'Video Load Error',
                B(F, n),
                console.info(e, t)
              }
            ),
            n.on('video:timeupdate', () => {
              G(n)
            });
            let Q = null;
            n.on(
              'video:play',
              () => {
                Q = setInterval(() => {
                  $(n)
                }, 10000),
                Z(!0),
                console.log({
                  movie: 'started playing'
                })
              }
            ),
            n.on('video:pause', () => {
              D = !1,
              Z(!0),
              Q &&
              clearInterval(Q)
            });
            let Y = () => {
              try {
                n &&
                'function' == typeof n.pause &&
                n.pause(),
                Z(!0)
              } catch (e) {
                console.warn('Artplayer sleep pause error:', e)
              }
            },
            X = () => {
              try {
                n &&
                'function' == typeof n.play &&
                n.play(),
                Z(!0)
              } catch (e) {
                console.warn('Artplayer sleep resume error:', e)
              }
            };
            return window.addEventListener('rive-pause-playback', Y),
            window.addEventListener('rive-resume-playback', X),
            n.on(
              'video:ended',
              () => {
                if (
                  D = !1,
                  Z(),
                  Q &&
                  clearInterval(Q),
                  window.__riveSleepTriggered ||
                  window.__riveSleepEndOfVideoActive
                ) {
                  G(n);
                  return
                }
                'tv' === m &&
                v.Am.promise(
                  () => new Promise(e => setTimeout(() => e({
                    name: 'Next Episode'
                  }), 3000)),
                  {
                    loading: 'To Next Episode...',
                    success: () => {
                      var e;
                      return window.__riveSleepTriggered ||
                      window.__riveSleepEndOfVideoActive ? 'Sleep Timer Active' : (
                        G(n),
                        null == f ||
                        null === (e = f.current) ||
                        void 0 === e ||
                        e.click(),
                        'Switch Successful'
                      )
                    },
                    error: 'Error'
                  }
                )
              }
            ),
            () => {
              if (
                window.removeEventListener('rive-pause-playback', Y),
                window.removeEventListener('rive-resume-playback', X),
                null == y ||
                y.removeEventListener('click', J),
                null == E ||
                E.removeEventListener('click', W),
                null == C ||
                C.removeEventListener('click', K),
                Q &&
                clearInterval(Q),
                x.current
              ) {
                try {
                  x.current.stopLoad(),
                  x.current.detachMedia(),
                  x.current.destroy()
                } catch (e) {
                  console.warn('HLS teardown error:', e)
                }
                x.current = null
              }
              if (n) {
                try {
                  n.hls &&
                  'function' == typeof n.hls.destroy &&
                  (n.hls.stopLoad(), n.hls.detachMedia(), n.hls.destroy())
                } catch (e) {
                  console.warn('Artplayer HLS teardown error:', e)
                }
                try {
                  var e;
                  let t = n.video ||
                  (null === (e = n.template) || void 0 === e ? void 0 : e.$video);
                  t &&
                  (t.pause(), t.src = '', t.removeAttribute('src'), t.load())
                } catch (e) {
                  console.warn('Artplayer video reset error:', e)
                }
                try {
                  n.audioContext &&
                  'function' == typeof n.audioContext.close &&
                  n.audioContext.close()
                } catch (e) {
                  console.warn('Artplayer AudioContext close error:', e)
                }
                try {
                  'function' == typeof n.destroy &&
                  n.destroy(!0)
                } catch (e) {
                  console.warn('Artplayer destroy error:', e)
                }
              }
              if (_.current) {
                try {
                  _.current.querySelectorAll('video, audio').forEach(
                    e => {
                      try {
                        e.pause(),
                        e.src = '',
                        e.removeAttribute('src'),
                        e.load()
                      } catch (e) {
                      }
                    }
                  )
                } catch (e) {
                }
                _.current.innerHTML = ''
              }
              b.current = null
            }
          },
          [
            l,
            S
          ]
        ),
        (0, n.useEffect) (
          () => {
            var e;
            let t = b.current;
            if (!t || !(null === (e = t.template) || void 0 === e ? void 0 : e.$video)) return;
            let l = (0, k.Gw) ();
            if (0 !== H.current && (null == l ? void 0 : l.PASSelection) !== 'false') {
              let e = [
                ...a ||
                [],
                ...r ||
                []
              ].find(e => z(e));
              e &&
              (
                H.current = 0,
                t.subtitle.url = e.file ||
                e.url,
                t.subtitle.type = e.type ||
                'srt',
                t.subtitle.encoding = 'utf-8',
                t.subtitle.escape = !1
              )
            }
          },
          [
            a,
            r
          ]
        ),
        (0, n.useEffect) (
          () => {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: (null == u ? void 0 : u.name) ||
              (null == u ? void 0 : u.title) ? (null == u ? void 0 : u.name) ||
              (null == u ? void 0 : u.title) : null,
              artist: null !== h &&
              null !== g ? 'S'.concat(h, ' E').concat(g) : 'Rive',
              artwork: [
                {
                  src: 'https://image.tmdb.org/t/p/original'.replace('/original', '/w185') + (
                    (null == u ? void 0 : u.poster_path) ||
                    (null == u ? void 0 : u.profile_path) ||
                    (null == u ? void 0 : u.still_path)
                  ) ||
                  '/images/logo512.png',
                  sizes: '500x500',
                  type: 'image/jpg'
                }
              ]
            })
          },
          [
            u
          ]
        ),
        (0, o.jsx) ('div', {
          ref: _,
          ...y
        })
      }
      var $ = l(9008),
      G = l.n($),
      J = l(62116),
      W = l(13114),
      K = l(34221),
      Q = l(53870),
      Y = l(9041),
      X = l.n(Y),
      ee = l(91487),
      et = e => {
        let {
          id: t,
          type: l,
          season: a,
          episode: r
        }
        = e,
        [
          s,
          c
        ] = (0, n.useState) (),
        [
          d,
          u
        ] = (0, n.useState) (!0),
        m = (0, i.useRouter) ();
        return (0, n.useEffect) (
          () => {
            let e = async() => {
              u(!0);
              try {
                var e;
                let o = await(0, p.Z) ({
                  requestID: 'TorrentProviderServices'
                });
                console.log({
                  providers: o
                }),
                null == o ||
                null === (e = o.data) ||
                void 0 === e ||
                e.map(
                  async e => {
                    let o = await(0, p.Z) ({
                      requestID: ''.concat(l, 'TorrentProvider'),
                      id: t,
                      service: e,
                      season: a,
                      episode: r
                    });
                    console.log({
                      providerData: o
                    }),
                    (null == o ? void 0 : o.data) &&
                    c(e => [...e ||
                    [],
                    null == o ? void 0 : o.data])
                  }
                )
              } catch (e) {
                console.log(e)
              } finally {
                u(!1)
              }
            };
            t &&
            e()
          },
          [
            t
          ]
        ),
        console.log({
          sources: s
        }),
        (0, o.jsxs) (
          K.E.div,
          {
            initial: {
              scale: 0
            },
            animate: {
              scale: 1
            },
            exit: {
              scale: 0
            },
            className: ''.concat(X().settingsPopoverCard, ' ').concat(X().torrentPopoverCard),
            onClick: e => {
              e.preventDefault(),
              e.stopPropagation()
            },
            children: [
              (0, o.jsxs) (
                'h1',
                {
                  className: X().torrentPopoverHeading,
                  children: [
                    'Torrent',
                    ' ',
                    (0, o.jsx) ('span', {
                      children: (0, o.jsx) (Q.e1i, {
                        className: X().inactive
                      })
                    })
                  ]
                }
              ),
              (0, o.jsxs) (
                'p',
                {
                  className: X().torrentPopoverHeading,
                  children: [
                    (0, o.jsx) (ee.ljt, {
                    }),
                    ' ',
                    (0, o.jsx) (ee.NGj, {
                    }),
                    ' ',
                    (0, o.jsx) (ee.Zao, {
                    }),
                    ' '
                  ]
                }
              ),
              null == s ? void 0 : s.map(
                e => {
                  var t,
                  l;
                  return (0, o.jsxs) (
                    'div',
                    {
                      className: X().torrentPopoverCardGroup,
                      children: [
                        (0, o.jsx) (
                          'h1',
                          {
                            children: null == e ? void 0 : null === (t = e.provider) ||
                            void 0 === t ? void 0 : t.toUpperCase()
                          }
                        ),
                        null == e ? void 0 : null === (l = e.sources) ||
                        void 0 === l ? void 0 : l.map(
                          e => {
                            var t,
                            l,
                            n;
                            let i = null == e ? void 0 : null === (t = e.title) ||
                            void 0 === t ? void 0 : t.split(' ');
                            return console.log({
                              tvxData: i
                            }),
                            (0, o.jsxs) (
                              y(),
                              {
                                className: X().sourceElement,
                                href: (null == e ? void 0 : e.url) ||
                                (null == e ? void 0 : e.magnet_url) ||
                                '/',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                onClick: () => {
                                  var t,
                                  l;
                                  null === (l = navigator) ||
                                  void 0 === l ||
                                  null === (t = l.clipboard) ||
                                  void 0 === t ||
                                  t.writeText((null == e ? void 0 : e.magnet_url) || (null == e ? void 0 : e.url)),
                                  v.Am.info(
                                    (0, o.jsxs) (
                                      'div',
                                      {
                                        children: [
                                          (0, o.jsx) ('p', {
                                            children: 'Link copied to clipboard'
                                          }),
                                          (0, o.jsx) (
                                            'p',
                                            {
                                              children: 'Open the downloaded file using torrent client'
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ),
                                  m.push((null == e ? void 0 : e.url) || (null == e ? void 0 : e.magnet_url) || '/')
                                },
                                children: [
                                  (0, o.jsxs) (
                                    'div',
                                    {
                                      children: [
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            className: X().hideMobile,
                                            children: null == e ? void 0 : e.name
                                          }
                                        ),
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            className: X().highlighted,
                                            'data-tooltip-id': 'tooltip',
                                            'data-tooltip-content': 'Video Type',
                                            children: (
                                              null == e ? void 0 : null === (l = e.type) ||
                                              void 0 === l ? void 0 : l.toUpperCase()
                                            ) ||
                                            (
                                              (null == i ? void 0 : i.length) > 3 ? null == i ? void 0 : null === (n = i[3]) ||
                                              void 0 === n ? void 0 : n.toUpperCase() : null
                                            )
                                          }
                                        ),
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            className: X().highlighted,
                                            'data-tooltip-id': 'tooltip',
                                            'data-tooltip-content': 'Video Quality',
                                            children: (null == e ? void 0 : e.quality) ||
                                            ((null == i ? void 0 : i.length) > 2 ? null == i ? void 0 : i[2] : null)
                                          }
                                        ),
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            'data-tooltip-id': 'tooltip',
                                            'data-tooltip-content': 'Video Codec',
                                            children: (null == e ? void 0 : e.video_codec) ||
                                            ((null == i ? void 0 : i.length) > 4 ? null == i ? void 0 : i[4] : null)
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  (0, o.jsxs) (
                                    'div',
                                    {
                                      children: [
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            className: X().highlighted,
                                            'data-tooltip-id': 'tooltip',
                                            'data-tooltip-html': 'Size : '.concat(null == e ? void 0 : e.size),
                                            children: null == e ? void 0 : e.size
                                          }
                                        ),
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            className: X().hideMobile,
                                            'data-tooltip-id': 'tooltip',
                                            'data-tooltip-content': 'Seed',
                                            children: null == e ? void 0 : e.seeds
                                          }
                                        ),
                                        (0, o.jsx) (
                                          'span',
                                          {
                                            className: X().hideMobile,
                                            'data-tooltip-id': 'tooltip',
                                            'data-tooltip-content': 'Peers',
                                            children: null == e ? void 0 : e.peers
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              d &&
              (0, o.jsx) ('p', {
                className: X().para,
                children: 'Loading...'
              }),
              !d &&
              (!s || (null == s ? void 0 : s.length) === 0) &&
              (0, o.jsx) (
                'p',
                {
                  className: X().para,
                  children: 'No Torrent Provider Found'
                }
              )
            ]
          }
        )
      },
      el = l(85938),
      eo = l(91460),
      en = l(4499);
      l(97798);
      var ei = l(65550);
      function ea(e) {
        let {
          url: t,
          server: l,
          captions: i,
          onlineSubtitles: a,
          getInstance: r,
          format: s,
          id: c,
          data: d,
          type: u,
          season: m,
          episode: h,
          nextBtn: g,
          ...f
        }
        = e,
        y = 'https://proxy.valhallastream.com/m3u8?url=',
        [
          w,
          _
        ] = (0, n.useState) (!1),
        [
          b,
          x
        ] = (0, n.useState) (),
        S = (0, n.useRef) (1),
        j = (0, n.useRef) (0),
        E = (0, n.useRef) (null),
        N = (0, n.useRef) (null),
        C = (0, n.useRef) (0),
        I = (0, n.useRef) (!1);
        (0, n.useEffect) (
          () => () => {
            if (E.current) try {
              E.current.video &&
              (
                E.current.video.pause(),
                E.current.video.src = '',
                E.current.video.removeAttribute('src'),
                E.current.video.load()
              ),
              'function' == typeof E.current.destroy &&
              E.current.destroy()
            } catch (e) {
              console.warn('StrataPlayer unmount teardown error:', e)
            }
            if (N.current) try {
              N.current.querySelectorAll('video, audio').forEach(
                e => {
                  try {
                    e.pause(),
                    e.src = '',
                    e.removeAttribute('src'),
                    e.load()
                  } catch (e) {
                  }
                }
              )
            } catch (e) {
            }
          },
          []
        ),
        (0, n.useEffect) (
          () => {
            let e = (0, k.Gw) ();
            _((null == e ? void 0 : e.proxyModeStream) == 'm3u8Proxy'),
            x(null == e ? void 0 : e.PMPlacement)
          },
          []
        ),
        (0, n.useEffect) (() => {
          S.current = 1,
          C.current = 0,
          j.current = 0,
          I.current = !1
        }, [
          t
        ]);
        let P = (0, n.useMemo) (() => 'hls' === s ? [
          new en.$
        ] : [], [
          s
        ]),
        A = (0, n.useMemo) (() => w && y ? y + encodeURIComponent(t) : t, [
          t,
          w,
          y
        ]),
        T = e => w &&
        y ? y + encodeURIComponent(e) : encodeURIComponent(e),
        M = (0, n.useMemo) (
          () => {
            let e = [],
            t = !1;
            return (null == i ? void 0 : i.length) > 0 &&
            i.forEach(
              l => {
                let o = !t &&
                z(l);
                o &&
                (t = !0),
                e.push({
                  src: l.file ||
                  l.url,
                  label: l.label ||
                  l.display ||
                  'Unknown',
                  kind: 'subtitles',
                default:
                  o
                })
              }
            ),
            (null == a ? void 0 : a.length) > 0 &&
            a.forEach(
              l => {
                var o;
                let n = !t &&
                z(l);
                n &&
                (t = !0),
                e.push({
                  src: l.url ||
                  l.file,
                  label: l.display ||
                  (null === (o = l.language) || void 0 === o ? void 0 : o.toUpperCase()) ||
                  'Unknown',
                  kind: 'subtitles',
                default:
                  n
                })
              }
            ),
            e
          },
          [
            i,
            a
          ]
        ),
        D = (0, n.useCallback) (
          async e => {
            let t = Date.now();
            if (t - j.current < 4000) return;
            j.current = t;
            let o = l ||
            'server';
            if (1 === S.current) v.Am.info('Retrying '.concat(o, ' (Attempt 2/2)...')),
            S.current = 0,
            setTimeout(
              () => {
                if (e) try {
                  e.load({
                    url: A,
                    type: 'hls' === s ? 'hls' : 'video/mp4'
                  })
                } catch (e) {
                  console.error('Retry load error:', e)
                }
              },
              3500
            );
             else if (
              0 === S.current &&
              (
                S.current = - 1,
                (null == f ? void 0 : f.onServerError) &&
                f.onServerError(),
                e
              )
            ) {
              let t = await(0, R.l) (d, m, h, e, window, l, w);
              (0, p.Z) ({
                requestID: 'observability',
                service: t
              })
            }
          },
          [
            d,
            m,
            h,
            l,
            w,
            M,
            f,
            A,
            s
          ]
        ),
        q = (0, n.useRef) (null);
        (0, n.useEffect) (
          () => {
            if (q.current && clearTimeout(q.current), !I.current) return q.current = setTimeout(
              () => {
                E.current &&
                !I.current &&
                S.current > 0 &&
                (
                  console.warn('StrataPlayer load watchdog timeout (8s). Retrying...'),
                  D(E.current)
                )
              },
              8000
            ),
            () => {
              q.current &&
              clearTimeout(q.current)
            }
          },
          [
            A,
            D
          ]
        );
        let F = (0, n.useCallback) (
          e => {
            let t = e.currentTime,
            l = e.duration;
            if (!l || void 0 === t) return;
            let o = t / l * 100;
            !Number.isNaN(o) &&
            Number.isFinite(o) &&
            (
              o >= 95 ? (0, L.Nm) ({
                id: c,
                type: u,
                season: m,
                episode: h,
                watchTime: 0,
                watchPercentage: 100
              }) : (0, L.Nm) ({
                id: c,
                type: u,
                season: m,
                episode: h,
                watchTime: t,
                watchPercentage: o
              })
            )
          },
          [
            c,
            u,
            m,
            h
          ]
        ),
        Z = (0, n.useMemo) (
          () => {
            let e = [],
            l = [];
            return 'hls' === s ? (
              l.push({
                html: 'HLSForge (Recommended)',
                onClick: () => {
                  let e = 'https://hlsforge.net/?url='.concat(T(t), '&id=').concat(c).concat(
                    'tv' === u ? '&season='.concat(m, '&episode=').concat(h) : '',
                    '&title='
                  ).concat(
                    (null == d ? void 0 : d.name) ||
                    (null == d ? void 0 : d.title),
                    '&downloadTitle='
                  ).concat((null == d ? void 0 : d.name) || (null == d ? void 0 : d.title)).concat('movie' !== u ? '-'.concat(m, '-').concat(h) : '');
                  window.open(e, '_blank')
                }
              }),
              l.push({
                html: 'Download HLS (mediatools)',
                onClick: () => {
                  let e = 'https://mediatools.cc/hlsDownloader?query='.concat(T(t));
                  window.open(e, '_blank')
                }
              })
            ) : l.push({
              html: 'Download MP4',
              onClick: () => {
                O(
                  t,
                  ''.concat((null == d ? void 0 : d.name) || (null == d ? void 0 : d.title)).concat('movie' !== u ? '-S'.concat(m, '-E').concat(h) : '', '.mp4')
                )
              }
            }),
            l.push({
              html: 'Rive Download',
              onClick: () => {
                let e = 'movie' === u ? '/download?type='.concat(u, '&id=').concat(c) : '/download?type='.concat(u, '&id=').concat(c, '&season=').concat(m, '&episode=').concat(h);
                window.open(e, '_blank')
              }
            }),
            e.push({
              html: 'Download',
              icon: (0, o.jsx) (ei.$0x, {
                className: 'w-4 h-4'
              }),
              children: l
            }),
            e
          },
          [
            t,
            w,
            s,
            c,
            u,
            m,
            h,
            d
          ]
        );
        return (0, o.jsx) (
          'div',
          {
            ref: N,
            ...f,
            children: (0, o.jsx) (
              eo.gN,
              {
                src: A,
                plugins: P,
                textTracks: M,
                settings: Z,
                poster: 'https://image.tmdb.org/t/p/original' + ((null == d ? void 0 : d.backdrop_path) || ''),
                autoPlay: !0,
                centerControls: !0,
                pip: !0,
                fullscreen: !0,
                hotKey: !0,
                lock: !0,
                fastForward: !0,
                gestureSeek: !0,
                onGetInstance: e => {
                  E.current = e,
                  r &&
                  r(e);
                  let t = () => {
                    q.current &&
                    (clearTimeout(q.current), q.current = null);
                    let t = (0, L.T_) ({
                      type: u,
                      id: c,
                      season: m,
                      episode: h
                    });
                    t &&
                    Number.isFinite(t.watchTime) &&
                    Number.isFinite(e.video.duration) &&
                    e.video.duration > 0 &&
                    (e.currentTime = t.watchTime, C.current = t.watchTime)
                  };
                  e.on('ready', () => {
                    e.video &&
                    e.video.readyState >= 1 &&
                    t()
                  }),
                  e.on('video:loadedmetadata', () => {
                    t()
                  }),
                  e.on(
                    'video:canplay',
                    () => {
                      I.current = !0,
                      q.current &&
                      (clearTimeout(q.current), q.current = null)
                    }
                  ),
                  e.on(
                    'video:playing',
                    () => {
                      I.current = !0,
                      q.current &&
                      (clearTimeout(q.current), q.current = null)
                    }
                  );
                  let l = setInterval(
                    () => {
                      if (e.video && !e.video.paused) {
                        let t = e.currentTime;
                        e.duration > 0 &&
                        Math.abs(t - C.current) >= 10 &&
                        (F(e), C.current = t)
                      }
                    },
                    1000
                  );
                  e.on('destroy', () => clearInterval(l)),
                  e.on('pause', () => F(e)),
                  e.on(
                    'ended',
                    () => {
                      if (
                        window.__riveSleepTriggered ||
                        window.__riveSleepEndOfVideoActive
                      ) {
                        F(e);
                        return
                      }
                      'tv' === u ? v.Am.promise(
                        new Promise(e => setTimeout(e, 3000)),
                        {
                          loading: 'Next Episode starting in 3s...',
                          success: () => {
                            var t;
                            return window.__riveSleepTriggered ||
                            window.__riveSleepEndOfVideoActive ? 'Sleep Timer Active' : (
                              F(e),
                              null == g ||
                              null === (t = g.current) ||
                              void 0 === t ||
                              t.click(),
                              'Switching Episode'
                            )
                          },
                          error: 'Error switching'
                        }
                      ) : F(e)
                    }
                  );
                  let o = () => {
                    try {
                      e &&
                      'function' == typeof e.pause &&
                      e.pause()
                    } catch (e) {
                      console.warn('Strataplayer sleep pause error:', e)
                    }
                  },
                  n = () => {
                    try {
                      e &&
                      'function' == typeof e.play &&
                      e.play()
                    } catch (e) {
                      console.warn('Strataplayer sleep resume error:', e)
                    }
                  };
                  window.addEventListener('rive-pause-playback', o),
                  window.addEventListener('rive-resume-playback', n),
                  e.on(
                    'destroy',
                    () => {
                      window.removeEventListener('rive-pause-playback', o),
                      window.removeEventListener('rive-resume-playback', n),
                      clearInterval(l)
                    }
                  ),
                  e.on(
                    'error',
                    t => {
                      q.current &&
                      clearTimeout(q.current),
                      console.warn('Player Error:', t),
                      D(e)
                    }
                  ),
                  e.on(
                    'video:error',
                    t => {
                      q.current &&
                      clearTimeout(q.current),
                      console.warn('Player Video Error:', t),
                      D(e)
                    }
                  )
                }
              },
              A
            )
          }
        )
      }
      var er = l(1002),
      es = l(22427);
      let ec = e => {
        var t,
        l,
        a,
        s,
        m,
        h,
        g,
        f,
        y,
        w,
        b,
        x,
        S,
        j,
        E,
        N,
        C,
        L,
        I,
        A,
        T,
        M;
        let {
          isEmbeded: D = !1
        }
        = e,
        R = (0, i.useSearchParams) (),
        {
          back: O,
          push: q
        }
        = (0, i.useRouter) (),
        [
          F,
          Z
        ] = (0, n.useState) (''),
        [
          U,
          H
        ] = (0, n.useState) (),
        [
          B,
          z
        ] = (0, n.useState) (),
        [
          $,
          Y
        ] = (0, n.useState) (),
        [
          X,
          ee
        ] = (0, n.useState) (1),
        [
          eo,
          en
        ] = (0, n.useState) (2),
        [
          ei,
          ec
        ] = (0, n.useState) (1),
        [
          ed,
          eu
        ] = (0, n.useState) (1),
        [
          ev,
          ep
        ] = (0, n.useState) (!0),
        [
          em,
          eh
        ] = (0, n.useState) (!1),
        [
          eg,
          ef
        ] = (0, n.useState) (),
        [
          ey,
          ew
        ] = (0, n.useState) (),
        [
          e_,
          eb
        ] = (0, n.useState) ('PRIME'),
        [
          ex,
          eS
        ] = (0, n.useState) ('direct'),
        [
          ej,
          eE
        ] = (0, n.useState) (!1),
        [
          eN,
          ek
        ] = (0, n.useState) (!1),
        [
          eC,
          eL
        ] = (0, n.useState) ([]),
        [
          eI,
          eP
        ] = (0, n.useState) (0),
        [
          eA,
          eT
        ] = (0, n.useState) ([]),
        [
          eM,
          eD
        ] = (0, n.useState) ([]),
        [
          eR,
          eO
        ] = (0, n.useState) (''),
        [
          eq,
          eF
        ] = (0, n.useState) (''),
        [
          eZ,
          eU
        ] = (0, n.useState) ([]),
        [
          eH,
          eB
        ] = (0, n.useState) ([]),
        [
          ez,
          eV
        ] = (0, n.useState) (!1),
        [
          e$,
          eG
        ] = (0, n.useState) (10),
        [
          eJ,
          eW
        ] = (0, n.useState) ([]),
        eK = (0, n.useRef) (null),
        eQ = (0, n.useRef) (null),
        eY = (0, n.useRef) (''),
        eX = (0, n.useCallback) (
          () => {
            eK.current &&
            (clearTimeout(eK.current), eK.current = null),
            eQ.current &&
            (clearTimeout(eQ.current), eQ.current = null)
          },
          []
        ),
        e0 = (0, n.useCallback) (
          e => {
            eX(),
            eS(e),
            ek('embed' === e),
            'direct' !== e &&
            eV(!1),
            localStorage.setItem('RiveStreamWatchMode', e),
            localStorage.setItem('RiveStreamEmbedMode', 'embed' === e ? 'true' : 'false')
          },
          [
            eX
          ]
        ),
        e1 = (0, n.useCallback) (
          e => {
            var t;
            eX(),
            eO(e);
            let l = 'number' == typeof e ? e : parseInt(String(e), 10),
            o = Array.isArray(eq) ? eq : [];
            !isNaN(l) &&
            (null === (t = o[l]) || void 0 === t ? void 0 : t.url) &&
            (eY.current = o[l].url)
          },
          [
            eX,
            eq
          ]
        ),
        e2 = (0, n.useRef) (null),
        e4 = (0, n.useRef) (null),
        e3 = (0, n.useRef) (null),
        {
          isMobile: e8,
          isTablet: e6,
          isDesktop: e5,
          isTV: e9
        }
        = (0, J.Z) (),
        [
          e7,
          te
        ] = (0, n.useState) (null != D && D),
        [
          tt,
          tl
        ] = (0, n.useState) (!1),
        [
          to,
          tn
        ] = (0, n.useState) ();
        (0, n.useEffect) (
          () => {
            let e = () => {
              eX(),
              'undefined' != typeof document &&
              document.querySelectorAll('video, audio').forEach(
                e => {
                  try {
                    e.pause(),
                    e.src = '',
                    e.removeAttribute('src'),
                    e.load()
                  } catch (e) {
                  }
                }
              )
            };
            return r().events.on('routeChangeStart', e),
            () => {
              r().events.off('routeChangeStart', e),
              eX(),
              'undefined' != typeof document &&
              document.querySelectorAll('video, audio').forEach(
                e => {
                  try {
                    e.pause(),
                    e.src = '',
                    e.removeAttribute('src'),
                    e.load()
                  } catch (e) {
                  }
                }
              )
            }
          },
          [
            eX
          ]
        ),
        (0, n.useEffect) (
          () => {
            eX(),
            eY.current = '',
            ep(!0),
            Z(R.get('type')),
            H(R.get('id')),
            z(R.get('season')),
            Y(R.get('episode')),
            (0, u.LD) ({
              type: R.get('type'),
              id: R.get('id'),
              season: R.get('season'),
              episode: R.get('episode')
            }),
            eB(e => []),
            eO(''),
            eF(e => []),
            eU(e => []),
            eW([]),
            eV(!1),
            eG(10);
            let e = (0, k.Gw) ();
            tn(null == e ? void 0 : e.MediaPlayer),
            eE(
              (null == e ? void 0 : e.localMediaEnabled) === !0 ||
              (null == e ? void 0 : e.localMediaEnabled) === 'true'
            )
          },
          [
            R,
            eX
          ]
        );
        let ti = (0, n.useCallback) (
          () => {
            eX();
            let e = 'number' == typeof eR ? eR : parseInt(String(eR), 10);
            isNaN(e) ||
            eW(
              t => {
                let l = t.includes(e) ? t : [
                  ...t,
                  e
                ],
                o = Array.isArray(eq) ? eq : [],
                n = o.length;
                if (0 === n) return l;
                let i = - 1;
                for (let t = 1; t <= n; t++) {
                  let o = (e + t) % n;
                  if (!l.includes(o) && o !== e) {
                    i = o;
                    break
                  }
                }
                if ( - 1 !== i) {
                  let t = o[e],
                  l = t ? ''.concat((null == t ? void 0 : t.source) || 'Server '.concat(e + 1)).concat((null == t ? void 0 : t.quality) ? ' ('.concat(t.quality, ')') : '') : 'Server '.concat(e + 1),
                  n = o[i],
                  a = n ? ''.concat((null == n ? void 0 : n.source) || 'Server '.concat(i + 1)).concat((null == n ? void 0 : n.quality) ? ' ('.concat(n.quality, ')') : '') : 'Server '.concat(i + 1);
                  v.Am.warning(
                    ''.concat(l, ' unreachable. Auto-switching to ').concat(a, ' in 7s...'),
                    {
                      duration: 7000
                    }
                  ),
                  eK.current = setTimeout(
                    () => {
                      var e;
                      eO(i),
                      (null === (e = o[i]) || void 0 === e ? void 0 : e.url) &&
                      (eY.current = o[i].url)
                    },
                    7000
                  )
                } else v.Am.error(
                  'All direct servers failed. Auto-switching to Embed Mode in 7s...',
                  {
                    duration: 7000
                  }
                ),
                eK.current = setTimeout(() => {
                  e0('embed')
                }, 7000);
                return l
              }
            )
          },
          [
            eq,
            eR,
            e0,
            eX
          ]
        ),
        ta = (0, n.useRef) (null);
        (0, n.useEffect) (
          () => {
            let e = e => {
              var t;
              !ta.current ||
              (
                null == ta ? void 0 : null === (t = ta.current) ||
                void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)
              ) ||
              eh(!1),
              console.log({
                event: e
              }),
              console.log({
                watchDetailRef: ta
              })
            };
            return document.addEventListener('mousedown', e),
            () => {
              document.removeEventListener('mousedown', e)
            }
          },
          []
        ),
        (0, n.useEffect) (
          () => {
            let e = localStorage.getItem('RiveStreamEmbedMode'),
            t = localStorage.getItem('RiveStreamWatchMode');
            if (t) eS(t),
            ek('embed' === t);
             else if (null != e) {
              let t = JSON.parse(e || 'false');
              ek(t),
              eS(t ? 'embed' : 'direct')
            } else ek(!1),
            eS('direct');
            let l = localStorage.getItem('RiveStreamLatestAgg');
            null != l &&
            eb(l);
            let o = async() => {
              var e,
              t,
              l,
              o;
              let n = await(0, p.Z) ({
                requestID: ''.concat(F, 'Data'),
                id: U
              });
              ef(n),
              ec(null == n ? void 0 : n.number_of_seasons);
              let i = await(0, p.Z) ({
                requestID: 'tvEpisodes',
                id: U,
                season: B
              });
              if (
                ew(i),
                (
                  null == i ? void 0 : null === (e = i.episodes) ||
                  void 0 === e ? void 0 : e.length
                ) > 0 &&
                en(
                  null == i ? void 0 : null === (
                    t = i.episodes[(
                      null == i ? void 0 : null === (l = i.episodes) ||
                      void 0 === l ? void 0 : l.length
                    ) - 1]
                  ) ||
                  void 0 === t ? void 0 : t.episode_number
                ),
                ee(
                  null == i ? void 0 : null === (o = i.episodes[0]) ||
                  void 0 === o ? void 0 : o.episode_number
                ),
                parseInt($) >= eo - 1
              ) {
                var a,
                r,
                s = await(0, p.Z) ({
                  requestID: 'tvEpisodes',
                  id: U,
                  season: parseInt(B) + 1
                });
                (
                  null == s ? void 0 : null === (a = s.episodes) ||
                  void 0 === a ? void 0 : a.length
                ) > 0 &&
                eu(
                  null == s ? void 0 : null === (r = s.episodes[0]) ||
                  void 0 === r ? void 0 : r.episode_number
                )
              }
            },
            n = async() => {
              ef(await(0, p.Z) ({
                requestID: ''.concat(F, 'Data'),
                id: U
              }))
            };
            'tv' === F ? o() : n();
            let i = e => {
              e.shiftKey &&
              'N' === e.key ? (e.preventDefault(), null == e2 || e2.current.click()) : e.shiftKey &&
              'P' === e.key ? (e.preventDefault(), null == e4 || e4.current.click()) : e.shiftKey &&
              'M' === e.key &&
              (e.preventDefault(), null == e3 || e3.current.click())
            };
            return window.addEventListener('keydown', i),
            () => {
              window.removeEventListener('keydown', i)
            }
          },
          [
            U,
            B,
            $
          ]
        ),
        (0, n.useEffect) (
          () => {
            let e,
            t = !1;
            return (
              async() => {
                if (!U || !F || !eg) return;
                let e = (0, k.Gw) ();
                if (
                  !(
                    (null == e ? void 0 : e.localMediaEnabled) === !0 ||
                    (null == e ? void 0 : e.localMediaEnabled) === 'true'
                  )
                ) {
                  eL([]);
                  return
                }
                let l = (null == eg ? void 0 : eg.title) ||
                (null == eg ? void 0 : eg.name),
                o = (null == eg ? void 0 : eg.release_date) ? parseInt(eg.release_date, 10) : (null == eg ? void 0 : eg.first_air_date) ? parseInt(eg.first_air_date, 10) : void 0;
                try {
                  let n = await(0, er.f8) ({
                    type: F,
                    id: U,
                    title: l,
                    year: o,
                    season: B ? parseInt(B, 10) : void 0,
                    episode: $ ? parseInt($, 10) : void 0,
                    imdbId: null == eg ? void 0 : eg.imdb_id
                  });
                  if (t) return;
                  let i = [],
                  a = [];
                  n.localFile &&
                  (
                    i.push({
                      source: 'Local Disk',
                      label: 'Local Disk',
                      url: n.localFile.source.url,
                      quality: 'Original',
                      format: n.localFile.source.format ||
                      'mp4',
                      isLocal: !0,
                      cleanup: n.localFile.source.cleanup
                    }),
                    n.localFile.source.captions &&
                    (a = [
                      ...a,
                      ...n.localFile.source.captions
                    ])
                  ),
                  n.jellyfin &&
                  (
                    i.push({
                      source: 'Jellyfin Server',
                      label: 'Jellyfin Server',
                      url: n.jellyfin.source.url,
                      quality: 'Stream',
                      format: n.jellyfin.source.format ||
                      'mp4',
                      isLocal: !0,
                      cleanup: n.jellyfin.source.cleanup
                    }),
                    n.jellyfin.source.captions &&
                    (a = [
                      ...a,
                      ...n.jellyfin.source.captions
                    ])
                  ),
                  eL(i),
                  eT(a);
                  let r = (null == e ? void 0 : e.preferLocalMedia) !== 'false' &&
                  (null == e ? void 0 : e.preferLocalMedia) !== !1;
                  r &&
                  i.length > 0 ? (
                    e0('local'),
                    eP(0),
                    v.Am.success('Loaded '.concat(i[0].source, ' for playback'))
                  ) : r &&
                  0 === i.length &&
                  'local' === ex &&
                  e0('direct')
                } catch (e) {
                  console.warn('Local media probe error:', e)
                }
              }
            ) (),
            () => {
              t = !0,
              e &&
              e()
            }
          },
          [
            U,
            F,
            B,
            $,
            eg
          ]
        );
        let tr = async() => {
          if (U && F) try {
            let e = {
              type: F,
              id: U,
              title: (null == eg ? void 0 : eg.title) ||
              (null == eg ? void 0 : eg.name),
              year: (null == eg ? void 0 : eg.release_date) ? parseInt(eg.release_date, 10) : (null == eg ? void 0 : eg.first_air_date) ? parseInt(eg.first_air_date, 10) : void 0,
              season: B ? parseInt(B, 10) : void 0,
              episode: $ ? parseInt($, 10) : void 0
            },
            t = await er.PA.linkSingleFileToQuery(e);
            if (t) {
              let e = await er.PA.createStreamSource(t),
              l = {
                source: 'Local Disk',
                label: 'Local Disk',
                url: e.url,
                quality: 'Original',
                format: e.format ||
                'mp4',
                isLocal: !0,
                cleanup: e.cleanup
              };
              eL([l]),
              eP(0),
              e0('local'),
              v.Am.success('Linked and playing "'.concat(t.name, '"'))
            }
          } catch (e) {
            (null == e ? void 0 : e.name) !== 'AbortError' &&
            v.Am.error('File linking failed: '.concat((null == e ? void 0 : e.message) || e))
          }
        };
        (0, n.useEffect) (
          () => {
            if (
              null != eN &&
              localStorage.setItem('RiveStreamEmbedMode', eN),
              !0 === eN
            ) {
              let e = localStorage.getItem('RiveStreamLatestAgg');
              null != e &&
              eb(e),
              v.Am.info(
                (0, o.jsxs) (
                  'div',
                  {
                    children: [
                      'Cloud: use AD-Blocker services for AD-free experience, like',
                      ' ',
                      (0, o.jsxs) (
                        'a',
                        {
                          target: '_blank',
                          href: 'https://ublockorigin.com/',
                          children: [
                            'uBlock Origin',
                            ' '
                          ]
                        }
                      ),
                      ' ',
                      'AD-Blocker extension or',
                      ' ',
                      (0, o.jsxs) (
                        'a',
                        {
                          target: '_blank',
                          href: 'https://brave.com/',
                          children: [
                            'Brave Browser',
                            ' '
                          ]
                        }
                      )
                    ]
                  }
                )
              ),
              v.Am.info(
                (0, o.jsxs) (
                  'div',
                  {
                    children: [
                      'Cloud: use video downloader extensions like',
                      ' ',
                      (0, o.jsxs) (
                        'a',
                        {
                          target: '_blank',
                          href: 'https://fetchv.net/',
                          children: [
                            'FetchV',
                            ' '
                          ]
                        }
                      ),
                      ' ',
                      'or',
                      ' ',
                      (0, o.jsxs) (
                        'a',
                        {
                          target: '_blank',
                          href: 'https://www.hlsloader.com/',
                          children: [
                            'Stream Recorder',
                            ' '
                          ]
                        }
                      ),
                      ' ',
                      'for PC and',
                      ' ',
                      (0, o.jsxs) (
                        'a',
                        {
                          target: '_blank',
                          href: 'https://play.google.com/store/apps/details?id=videoplayer.videodownloader.downloader',
                          children: [
                            'AVDP',
                            ' '
                          ]
                        }
                      ),
                      ' ',
                      'for Android, to download movies/tv shows. Refer',
                      ' ',
                      (0, o.jsxs) (
                        'a',
                        {
                          target: '_blank',
                          href: 'https://www.reddit.com/r/DataHoarder/comments/qgne3i/how_to_download_videos_from_vidsrcme/',
                          children: [
                            'The Source',
                            ' '
                          ]
                        }
                      )
                    ]
                  }
                )
              )
            } else (e5 || e9) &&
            v.Am.info(
              (0, o.jsxs) (
                'a',
                {
                  target: '_blank',
                  href: 'https://discord.gg/6xJmJja8fV',
                  className: 'discordInvitation',
                  children: [
                    (0, o.jsx) (_.j2d, {
                    }),
                    'Join Rive community on Discord',
                    (0, o.jsx) (_.j2d, {
                    })
                  ]
                }
              )
            )
          },
          [
            eN
          ]
        );
        let ts = (0, n.useRef) (null);
        function tc() {
          $ > X &&
          q(
            '/watch?type=tv&id='.concat(U, '&season=').concat(B, '&episode=').concat(parseInt($) - 1)
          )
        }
        function td() {
          $ < eo ? q(
            '/watch?type=tv&id='.concat(U, '&season=').concat(B, '&episode=').concat(parseInt($) + 1)
          ) : parseInt(B) + 1 <= ei &&
          q(
            '/watch?type=tv&id='.concat(U, '&season=').concat(parseInt(B) + 1, '&episode=').concat(ed)
          )
        }(0, n.useEffect) (
          () => (
            eG(10),
            ez &&
            (
              ts.current = setInterval(
                () => {
                  eG(
                    e => e <= 1 ? (ts.current && (clearInterval(ts.current), ts.current = null), 10) : e - 1
                  )
                },
                1000
              )
            ),
            () => {
              ts.current &&
              clearInterval(ts.current)
            }
          ),
          [
            ez
          ]
        ),
        (0, n.useEffect) (
          () => {
            let e = new AbortController,
            t = e.signal;
            if ('direct' === ex && null != U) {
              if (t.aborted) return;
              let e = async() => {
                var e,
                l,
                o,
                n,
                i,
                a,
                r,
                s;
                eV(!1);
                let c = await(0, p.Z) ({
                  requestID: 'VideoProviderServices'
                });
                if (t.aborted) return;
                eB(
                  null == c ? void 0 : null === (e = c.data) ||
                  void 0 === e ? void 0 : e.map(e => ({
                    name: e,
                    status: 'available'
                  }))
                );
                let d = {
                  sources: [],
                  captions: []
                };
                if (!t.aborted) {
                  for (let e of (null == c ? void 0 : c.data) || []) {
                    if (t.aborted) return;
                    eB(t => t.map(t => t.name === e ? {
                      ...t,
                      status: 'fetching'
                    }
                     : t));
                    try {
                      if (t.aborted) return;
                      let l = await(0, p.Z) ({
                        requestID: ''.concat(F, 'VideoProvider'),
                        id: U,
                        season: B,
                        episode: $,
                        service: e
                      });
                      if (
                        console.log({
                          tempRes: l
                        }),
                        null == l ||
                        null === (n = l.data) ||
                        void 0 === n ||
                        null === (o = n.sources) ||
                        void 0 === o ||
                        o.forEach(e => {
                          d.sources.push(e)
                        }),
                        null == l ||
                        null === (a = l.data) ||
                        void 0 === a ||
                        null === (i = a.captions) ||
                        void 0 === i ||
                        i.forEach(e => {
                          d.captions.push(e)
                        }),
                        t.aborted ||
                        (
                          eB(
                            t => t.map(
                              t => {
                                if (t.name === e) {
                                  var o,
                                  n;
                                  return {
                                    ...t,
                                    status: (
                                      null == l ? void 0 : null === (n = l.data) ||
                                      void 0 === n ? void 0 : null === (o = n.sources) ||
                                      void 0 === o ? void 0 : o.length
                                    ) > 0 ? 'success' : 'error'
                                  }
                                }
                                return t
                              }
                            )
                          ),
                          t.aborted
                        )
                      ) return;
                      if (
                        (
                          null == l ? void 0 : null === (s = l.data) ||
                          void 0 === s ? void 0 : null === (r = s.sources) ||
                          void 0 === r ? void 0 : r.length
                        ) > 0
                      ) {
                        if (t.aborted) return;
                        eF(
                          e => {
                            let t = [
                              ...Array.isArray(e) ? e : [],
                              ...l.data.sources
                            ];
                            if (eY.current) {
                              let e = t.findIndex(e => (null == e ? void 0 : e.url) === eY.current);
                              - 1 !== e &&
                              eO(e)
                            }
                            return t
                          }
                        ),
                        eO(
                          e => {
                            if ('' === e) {
                              var t;
                              return eY.current = (null === (t = l.data.sources[0]) || void 0 === t ? void 0 : t.url) ||
                              '',
                              0
                            }
                            return e
                          }
                        ),
                        eU(
                          e => {
                            var t,
                            o;
                            let n = Array.isArray(e) ? e : [],
                            i = Array.isArray(null == l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : t.captions) ? null == l ? void 0 : null === (o = l.data) ||
                            void 0 === o ? void 0 : o.captions : [];
                            return [...n,
                            ...i]
                          }
                        ),
                        eX(),
                        eV(!1)
                      }
                    } catch (l) {
                      if (t.aborted) return;
                      console.error('Error fetching data for provider '.concat(e, ':'), l),
                      eB(t => t.map(t => t.name === e ? {
                        ...t,
                        status: 'error'
                      }
                       : t))
                    }
                  }
                  if (!t.aborted) {
                    if (
                      (null == d ? void 0 : null === (l = d.sources) || void 0 === l ? void 0 : l.length) > 0
                    ) {
                      if (t.aborted) return;
                      eO(
                        e => {
                          if ('' === e) {
                            var t;
                            return eY.current = (null === (t = d.sources[0]) || void 0 === t ? void 0 : t.url) ||
                            '',
                            0
                          }
                          return e
                        }
                      ),
                      eX(),
                      eV(!1)
                    } else {
                      if (t.aborted) return;
                      eV(!0),
                      eX(),
                      eQ.current = setTimeout(() => {
                        e0('embed')
                      }, 10000)
                    }
                  }
                }
              };
              if (t.aborted) return;
              let l = async() => {
                try {
                  var e;
                  let t = await(0, p.Z) ({
                    requestID: ''.concat(F, 'OnlineSubtitles'),
                    id: U,
                    season: B,
                    episode: $
                  }),
                  l = 'https://subs.1shows.app'.replace(/\/$/, ''),
                  o = (
                    null == t ? void 0 : null === (e = t.subtitles) ||
                    void 0 === e ? void 0 : e.map(
                      e => {
                        var t;
                        let o = (
                          null == e ? void 0 : null === (t = e.url) ||
                          void 0 === t ? void 0 : t.startsWith('/')
                        ) ? e.url : '/'.concat(e.url),
                        n = ''.concat(l).concat(o);
                        return {
                          display: null == e ? void 0 : e.lang,
                          url: n,
                          file: n,
                          language: null == e ? void 0 : e.lang,
                          label: null == e ? void 0 : e.lang
                        }
                      }
                    )
                  ) ||
                  [];
                  eD(o)
                } catch (e) {
                  console.error('Error fetching online subtitles:', e),
                  eD([])
                }
              };
              e(),
              l()
            }
            return () => {
              e.abort(),
              eX()
            }
          },
          [
            U,
            B,
            $,
            ex,
            eX,
            e0
          ]
        );
        let tu = (0, n.useMemo) (
          () => {
            var e;
            if (!U || 'embed' !== ex || !eN) return null;
            let t = (null == eg ? void 0 : eg.imdb_id) ||
            (
              null == eg ? void 0 : null === (e = eg.external_ids) ||
              void 0 === e ? void 0 : e.imdb_id
            );
            return (0, es.YC) (
              e_,
              {
                type: F ||
                'movie',
                id: U,
                season: B ||
                1,
                episode: $ ||
                1,
                imdbId: t,
                title: (null == eg ? void 0 : eg.title) ||
                (null == eg ? void 0 : eg.name)
              }
            )
          },
          [
            e_,
            F,
            U,
            B,
            $,
            eg,
            ex,
            eN
          ]
        );
        return (0, o.jsxs) (
          o.Fragment,
          {
            children: [
              (0, o.jsx) (
                G(),
                {
                  children: (0, o.jsxs) (
                    'title',
                    {
                      children: [
                        'Rive | Watch',
                        ' ',
                        null != U ? '| '.concat((null == eg ? void 0 : eg.name) || (null == eg ? void 0 : eg.title) || U) : null,
                        ' ',
                        null != B ? '| S'.concat(B, '-E').concat($) : null
                      ]
                    }
                  )
                }
              ),
              tt &&
              (0, o.jsx) (
                'div',
                {
                  className: c().settingsPopover,
                  onClick: () => tl(!1),
                  children: (0, o.jsx) (et, {
                    id: U,
                    type: F,
                    season: B,
                    episode: $
                  })
                }
              ),
              (0, o.jsxs) (
                'div',
                {
                  className: c().watch,
                  children: [
                    (0, o.jsx) (
                      el.Z,
                      {
                        onOpenTorrent: () => tl(!0),
                        onOpenDetails: () => eh(e => !e),
                        onPrevEpisode: () => {
                          $ > X &&
                          tc()
                        },
                        onNextEpisode: () => {
                          ($ < eo || parseInt(B) + 1 <= ei) &&
                          td()
                        },
                        hasPrevEpisode: $ > X,
                        hasNextEpisode: $ < eo ||
                        parseInt(B) + 1 <= ei,
                        season: B,
                        episode: $,
                        type: F,
                        hideNav: e7
                      }
                    ),
                    D ? null : (0, o.jsx) (
                      'div',
                      {
                        onClick: () => O(),
                        onKeyDown: e => {
                          ('Enter' === e.key || ' ' === e.key) &&
                          (e.preventDefault(), O())
                        },
                        role: 'button',
                        tabIndex: 0,
                        'aria-label': 'Go back',
                        className: ''.concat(c().backBtn, ' ').concat(e7 ? c().hideBtns : null),
                        children: (0, o.jsx) (
                          Q.RH_,
                          {
                            'data-tooltip-id': 'tooltip',
                            'data-tooltip-content': 'Go Back'
                          }
                        )
                      }
                    ),
                    (0, o.jsxs) (
                      'div',
                      {
                        style: {
                          display: 'none'
                        },
                        'aria-hidden': 'true',
                        children: [
                          (0, o.jsx) ('button', {
                            ref: e4,
                            type: 'button',
                            onClick: () => {
                              $ > X &&
                              tc()
                            }
                          }),
                          (0, o.jsx) (
                            'button',
                            {
                              ref: e2,
                              type: 'button',
                              onClick: () => {
                                !window.__riveSleepTriggered &&
                                !window.__riveSleepEndOfVideoActive &&
                                ($ < eo || parseInt(B) + 1 <= ei) &&
                                td()
                              }
                            }
                          ),
                          (0, o.jsx) ('button', {
                            ref: e3,
                            type: 'button',
                            onClick: () => eh(e => !e)
                          })
                        ]
                      }
                    ),
                    em &&
                    (0, o.jsxs) (
                      o.Fragment,
                      {
                        children: [
                          (0, o.jsx) (
                            'div',
                            {
                              className: 'modalOverlay',
                              onClick: () => eh(!1),
                              style: {
                                zIndex: 8499
                              }
                            }
                          ),
                          (0, o.jsx) (
                            P,
                            {
                              watchDetailRef: ta,
                              id: U,
                              type: F,
                              data: eg,
                              season: B,
                              episode: $,
                              setWatchDetails: eh
                            }
                          )
                        ]
                      }
                    ),
                    (0, o.jsx) (
                      d.Z,
                      {
                        watchMode: ex,
                        setWatchMode: e0,
                        embedMode: 'embed' === ex,
                        setEmbedMode: e => {
                          e0(e ? 'embed' : 'direct')
                        },
                        source: e_,
                        setSource: eb,
                        embedOptions: es.CH,
                        nonEmbedSources: eq,
                        nonEmbedSourcesIndex: eR,
                        setNonEmbedSourcesIndex: e1,
                        erroredServerIndices: eJ,
                        localMediaEnabled: ej,
                        localSources: eC,
                        localSourcesIndex: eI,
                        setLocalSourcesIndex: eP,
                        hideNav: e7,
                        setHideNav: te
                      }
                    ),
                    'direct' === ex &&
                    (!eq || (null == eq ? void 0 : eq.length) === 0) &&
                    null != U &&
                    (0, o.jsxs) (
                      'div',
                      {
                        className: ''.concat(c().loader, ' skeleton'),
                        children: [
                          (0, o.jsx) ('div', {
                            className: c().videoProvidersGradient
                          }),
                          (0, o.jsx) (
                            W.M,
                            {
                              children: (0, o.jsxs) (
                                'div',
                                {
                                  className: c().videoProviders,
                                  children: [
                                    (0, o.jsx) (
                                      'div',
                                      {
                                        className: ''.concat(c().videoProvidersList, ' ').concat(c().videoProvidersListTop),
                                        children: null == eH ? void 0 : eH.map(
                                          e => {
                                            var t;
                                            if (
                                              (null == e ? void 0 : e.status) === 'success' ||
                                              (null == e ? void 0 : e.status) === 'error'
                                            ) return (0, o.jsxs) (
                                              K.E.div,
                                              {
                                                initial: {
                                                  y: 50
                                                },
                                                animate: {
                                                  y: 0
                                                },
                                                className: ''.concat(c().videoProvider, ' ').concat(
                                                  (null == e ? void 0 : e.status) === 'available' ? c().available : null,
                                                  ' '
                                                ).concat((null == e ? void 0 : e.status) === 'fetching' ? c().fetching : null, ' ').concat((null == e ? void 0 : e.status) === 'success' ? c().success : null, ' ').concat((null == e ? void 0 : e.status) === 'error' ? c().error : null),
                                                children: [
                                                  (0, o.jsx) (
                                                    'div',
                                                    {
                                                      className: ''.concat(c().videoProviderName),
                                                      children: null == e ? void 0 : null === (t = e.name) ||
                                                      void 0 === t ? void 0 : t.toUpperCase()
                                                    }
                                                  ),
                                                  (0, o.jsx) (
                                                    'div',
                                                    {
                                                      className: ''.concat(c().videoProviderStatus, ' '),
                                                      children: null == e ? void 0 : e.status
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          }
                                        )
                                      }
                                    ),
                                    (0, o.jsxs) (
                                      'div',
                                      {
                                        className: ''.concat(c().videoProvidersList, ' ').concat(c().videoProvidersListMid),
                                        children: [
                                          null == eH ? void 0 : eH.map(
                                            e => {
                                              var t;
                                              if ((null == e ? void 0 : e.status) === 'fetching') return (0, o.jsxs) (
                                                K.E.div,
                                                {
                                                  initial: {
                                                    y: 50,
                                                    scale: 1
                                                  },
                                                  animate: {
                                                    y: 0,
                                                    scale: 1.1
                                                  },
                                                  exit: {
                                                    y: - 10,
                                                    scale: 1
                                                  },
                                                  className: ''.concat(c().videoProvider, ' ').concat(
                                                    (null == e ? void 0 : e.status) === 'available' ? c().available : null,
                                                    ' '
                                                  ).concat((null == e ? void 0 : e.status) === 'fetching' ? c().fetching : null, ' ').concat((null == e ? void 0 : e.status) === 'success' ? c().success : null, ' ').concat((null == e ? void 0 : e.status) === 'error' ? c().error : null),
                                                  children: [
                                                    (0, o.jsx) (
                                                      'div',
                                                      {
                                                        className: ''.concat(c().videoProviderName),
                                                        children: null == e ? void 0 : null === (t = e.name) ||
                                                        void 0 === t ? void 0 : t.toUpperCase()
                                                      }
                                                    ),
                                                    (0, o.jsx) (
                                                      'div',
                                                      {
                                                        className: ''.concat(c().videoProviderStatus, ' '),
                                                        children: null == e ? void 0 : e.status
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            }
                                          ),
                                          ez &&
                                          (0, o.jsx) (
                                            'p',
                                            {
                                              className: ''.concat(c().para2, ' ').concat(c().nonEmbedSourcesNotFoundCnt),
                                              children: e$ < 0 ? 10 : e$
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    (0, o.jsx) (
                                      'div',
                                      {
                                        className: c().videoProvidersList,
                                        children: null == eH ? void 0 : eH.map(
                                          e => {
                                            var t;
                                            if ((null == e ? void 0 : e.status) === 'available') return (0, o.jsxs) (
                                              K.E.div,
                                              {
                                                initial: {
                                                  y: 50
                                                },
                                                animate: {
                                                  y: 0
                                                },
                                                exit: {
                                                  y: - 50
                                                },
                                                className: ''.concat(c().videoProvider, ' ').concat(
                                                  (null == e ? void 0 : e.status) === 'available' ? c().available : null,
                                                  ' '
                                                ).concat((null == e ? void 0 : e.status) === 'fetching' ? c().fetching : null, ' ').concat((null == e ? void 0 : e.status) === 'success' ? c().success : null, ' ').concat((null == e ? void 0 : e.status) === 'error' ? c().error : null),
                                                children: [
                                                  (0, o.jsx) (
                                                    'div',
                                                    {
                                                      className: ''.concat(c().videoProviderName),
                                                      children: null == e ? void 0 : null === (t = e.name) ||
                                                      void 0 === t ? void 0 : t.toUpperCase()
                                                    }
                                                  ),
                                                  (0, o.jsx) (
                                                    'div',
                                                    {
                                                      className: ''.concat(c().videoProviderStatus, ' '),
                                                      children: null == e ? void 0 : e.status
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          }
                                        )
                                      }
                                    ),
                                    (0, o.jsx) (
                                      'div',
                                      {
                                        className: c().nonEmbedSwitchMsg,
                                        children: ez ? (0, o.jsxs) (
                                          'p',
                                          {
                                            className: ''.concat(c().para2, ' ').concat(c().success),
                                            children: [
                                              'Server not found. Automatically switching to Embed Mode in',
                                              ' ',
                                              e$ < 0 ? 10 : e$,
                                              ' ',
                                              'sec'
                                            ]
                                          }
                                        ) : (0, o.jsx) (
                                          'p',
                                          {
                                            className: c().para,
                                            children: 'If Server not found, Then system will automatically switch to Embed Mode in 10 seconds'
                                          }
                                        )
                                      }
                                    )
                                  ]
                                }
                              )
                            }
                          )
                        ]
                      }
                    ),
                    'local' === ex &&
                    (null == eC ? void 0 : eC.length) > 0 &&
                    (null === (t = eC[Number(eI)]) || void 0 === t ? void 0 : t.url) &&
                    (
                      'artplayer' === to ? (0, o.jsx) (
                        V,
                        {
                          url: null === (l = eC[Number(eI)]) ||
                          void 0 === l ? void 0 : l.url,
                          server: (null === (a = eC[Number(eI)]) || void 0 === a ? void 0 : a.source) ||
                          'Local Media',
                          format: (null === (s = eC[Number(eI)]) || void 0 === s ? void 0 : s.format) ||
                          'mp4',
                          captions: [
                            ...eA,
                            ...eM
                          ],
                          onlineSubtitles: eM,
                          className: c().videoPlayer,
                          id: U,
                          data: eg,
                          type: F,
                          season: B,
                          episode: $,
                          nextBtn: e2,
                          onServerError: () => {
                            v.Am.error(
                              'Playback format or codec not supported by browser. Falling back to Direct Mode...'
                            ),
                            e0('direct')
                          }
                        },
                        null === (m = eC[Number(eI)]) ||
                        void 0 === m ? void 0 : m.url
                      ) : (0, o.jsx) (
                        ea,
                        {
                          url: null === (h = eC[Number(eI)]) ||
                          void 0 === h ? void 0 : h.url,
                          server: (null === (g = eC[Number(eI)]) || void 0 === g ? void 0 : g.source) ||
                          'Local Media',
                          format: (null === (f = eC[Number(eI)]) || void 0 === f ? void 0 : f.format) ||
                          'mp4',
                          captions: [
                            ...eA,
                            ...eM
                          ],
                          onlineSubtitles: eM,
                          className: c().videoPlayer,
                          id: U,
                          data: eg,
                          type: F,
                          season: B,
                          episode: $,
                          nextBtn: e2,
                          onServerError: () => {
                            v.Am.error(
                              'Playback format or codec not supported by browser. Falling back to Direct Mode...'
                            ),
                            e0('direct')
                          }
                        },
                        null === (y = eC[Number(eI)]) ||
                        void 0 === y ? void 0 : y.url
                      )
                    ),
                    'local' === ex &&
                    (!eC || 0 === eC.length) &&
                    (0, o.jsx) (
                      'div',
                      {
                        className: c().localNotFound,
                        children: (0, o.jsxs) (
                          'div',
                          {
                            className: c().scanner,
                            children: [
                              (0, o.jsx) ('h2', {
                                children: 'No Local Media Matched'
                              }),
                              (0, o.jsx) (
                                'p',
                                {
                                  children: (null == eg ? void 0 : eg.title) ||
                                  (null == eg ? void 0 : eg.name) ? 'No local video file or Jellyfin stream was matched for "'.concat((null == eg ? void 0 : eg.title) || (null == eg ? void 0 : eg.name), '".') : 'No local video file or Jellyfin stream was matched for this title.'
                                }
                              ),
                              (0, o.jsxs) (
                                'div',
                                {
                                  className: c().actions,
                                  children: [
                                    (0, o.jsx) (
                                      'button',
                                      {
                                        type: 'button',
                                        onClick: tr,
                                        className: c().linkBtn,
                                        children: 'Link Local File'
                                      }
                                    ),
                                    (0, o.jsx) (
                                      'button',
                                      {
                                        type: 'button',
                                        onClick: () => {
                                          e0('direct'),
                                          v.Am.info('Switched to Direct Mode')
                                        },
                                        className: c().switchBtn,
                                        children: 'Switch to Direct Mode'
                                      }
                                    )
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    'direct' === ex &&
                    '' !== eR &&
                    (null == eq ? void 0 : eq.length) > 0 &&
                    (null === (w = eq[eR]) || void 0 === w ? void 0 : w.url) &&
                    (
                      'artplayer' === to ? (0, o.jsx) (
                        V,
                        {
                          url: null === (b = eq[eR]) ||
                          void 0 === b ? void 0 : b.url,
                          server: ''.concat(
                            (null === (x = eq[eR]) || void 0 === x ? void 0 : x.source) ||
                            'Server '.concat(parseInt(eR) + 1)
                          ).concat(
                            (null === (S = eq[eR]) || void 0 === S ? void 0 : S.quality) ? ' ('.concat(null === (j = eq[eR]) || void 0 === j ? void 0 : j.quality, ')') : ''
                          ),
                          format: null === (E = eq[eR]) ||
                          void 0 === E ? void 0 : E.format,
                          captions: eZ,
                          onlineSubtitles: eM,
                          className: c().videoPlayer,
                          id: U,
                          data: eg,
                          type: F,
                          season: B,
                          episode: $,
                          nextBtn: e2,
                          onServerError: ti
                        },
                        null === (N = eq[eR]) ||
                        void 0 === N ? void 0 : N.url
                      ) : (0, o.jsx) (
                        ea,
                        {
                          url: null === (C = eq[eR]) ||
                          void 0 === C ? void 0 : C.url,
                          server: ''.concat(
                            (null === (L = eq[eR]) || void 0 === L ? void 0 : L.source) ||
                            'Server '.concat(parseInt(eR) + 1)
                          ).concat(
                            (null === (I = eq[eR]) || void 0 === I ? void 0 : I.quality) ? ' ('.concat(null === (A = eq[eR]) || void 0 === A ? void 0 : A.quality, ')') : ''
                          ),
                          format: null === (T = eq[eR]) ||
                          void 0 === T ? void 0 : T.format,
                          captions: eZ,
                          onlineSubtitles: eM,
                          className: c().videoPlayer,
                          id: U,
                          data: eg,
                          type: F,
                          season: B,
                          episode: $,
                          nextBtn: e2,
                          onServerError: ti
                        },
                        null === (M = eq[eR]) ||
                        void 0 === M ? void 0 : M.url
                      )
                    ),
                    'embed' === ex &&
                    !0 === eN &&
                    U &&
                    tu &&
                    (0, o.jsx) (
                      'iframe',
                      {
                        scrolling: 'no',
                        src: tu,
                        className: c().iframe,
                        allowFullScreen: !0,
                        allow: 'accelerometer; autoplay; encrypted-media; gyroscope;',
                        referrerPolicy: 'origin'
                      },
                      ''.concat(e_, '-').concat(U, '-').concat(B || 1, '-').concat($ || 1)
                    )
                  ]
                }
              )
            ]
          }
        )
      };
      var ed = ec
    },
    9041: function (e) {
      e.exports = {
        settingsPopoverCard: 'style_settingsPopoverCard__cpUmg',
        para: 'style_para__82v6f',
        trailerListWrapper: 'style_trailerListWrapper__i99qt',
        mobileServerSelect: 'style_mobileServerSelect__SomHN',
        trailerListHeader: 'style_trailerListHeader___T7oK',
        chatToggleBtn: 'style_chatToggleBtn___lQaz',
        chatToggleBtnActive: 'style_chatToggleBtnActive__Q8Xx_',
        trailerList: 'style_trailerList__0J4bJ',
        listItem: 'style_listItem__ds_x4',
        listItemActive: 'style_listItemActive__eaC1k',
        trailerIframe: 'style_trailerIframe__34siE',
        iframe: 'style_iframe___oGX_',
        settingsPopoverChat: 'style_settingsPopoverChat__Sp6m1',
        settingsPopoverChatHidden: 'style_settingsPopoverChatHidden__XII5I',
        torrentPopoverCard: 'style_torrentPopoverCard__aLv2u',
        torrentPopoverHeading: 'style_torrentPopoverHeading__jfeJn',
        torrentPopoverCardGroup: 'style_torrentPopoverCardGroup__r4LOz',
        sourceElement: 'style_sourceElement__wbK_r',
        highlighted: 'style_highlighted__i6JSf',
        hideMobile: 'style_hideMobile__Zb34v',
        offlineContainer: 'style_offlineContainer__enx31',
        offlineCard: 'style_offlineCard__BCRn8',
        offlineIcon: 'style_offlineIcon__wJjKC',
        retryBtn: 'style_retryBtn__uwuTy',
        countdownContainer: 'style_countdownContainer__BLdvn',
        countdownBox: 'style_countdownBox__oQzLj',
        countdownVal: 'style_countdownVal__THpnO',
        countdownLabel: 'style_countdownLabel__jU6tk'
      }
    },
    67274: function (e) {
      e.exports = {
        spinner: 'style_spinner__menr_',
        center: 'style_center__BDEGj',
        spinner_blade: 'style_spinner_blade__aATz_',
        'spinner-fade9234': 'style_spinner-fade9234__eOJ8p'
      }
    },
    46791: function (e) {
      e.exports = {
        MovieCardSmall: 'style_MovieCardSmall__ZFLlv',
        desktopOverflow: 'style_desktopOverflow__j9wN3',
        img: 'style_img__1DQdE',
        metaData: 'style_metaData__MIuCO'
      }
    },
    65674: function (e) {
      e.exports = {
        MetaDetailPage: 'style_MetaDetailPage__yafJU',
        MetaDetails: 'style_MetaDetails__kbLj3',
        category: 'style_category__NB4tr',
        casts: 'style_casts__aALkS',
        header: 'style_header__0B4Uc',
        cast: 'style_cast__xwLXR',
        img: 'style_img__r_qM3',
        MovieList: 'style_MovieList__gzrRy',
        ReviewList: 'style_ReviewList__EOIRu',
        EpisodeList: 'style_EpisodeList__0KQK2',
        Review: 'style_Review__Z_Tys',
        rating: 'style_rating__hl0Xa',
        ReviewDetail: 'style_ReviewDetail__PNm6A',
        episodeOverview: 'style_episodeOverview__bmwy9',
        reviewOverview: 'style_reviewOverview__wP8Vf',
        episode: 'style_episode__vgb6v',
        CardSmall: 'style_CardSmall__e6S3h',
        details: 'style_details___tIPl',
        links: 'style_links__xJH8I',
        episodeHeader: 'style_episodeHeader__jdlT1',
        pagination: 'style_pagination__uYZ5r',
        page_item: 'style_page_item__FoEmJ',
        inactive: 'style_inactive__7f9zR',
        active: 'style_active__BrWig',
        paginateActive: 'style_paginateActive__SC2jr',
        disabled: 'style_disabled__qiP3h',
        notAired: 'style_notAired__Rq6mm',
        notAiredTag: 'style_notAiredTag__LLT5m',
        highlightEpisode: 'style_highlightEpisode__D3s_v',
        watchProgress: 'style_watchProgress__qWspr',
        semiHighlightEpisode: 'style_semiHighlightEpisode__a0HfV',
        close: 'style_close__WMxuo',
        loadMore: 'style_loadMore__6D6V6'
      }
    },
    97798: function () {
    },
    71708: function (e, t, l) {
      'use strict';
      function o(e) {
        let t = !1,
        l = null,
        o = null,
        n = e => {
          let t = document.querySelector('.art-icon-cast');
          if (t) switch (e) {
            case 'connected':
              t.style.color = 'red';
              break;
            case 'connecting':
            case 'disconnecting':
              t.style.color = 'orange';
              break;
            default:
              t.style.color = 'white'
          }
        },
        i = () => new Promise(
          (i, a) => {
            if (
              window.__onGCastApiAvailable = r => {
                if (r) {
                  let a = window.cast.framework.CastContext.getInstance();
                  a.setOptions({
                    receiverApplicationId: window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
                    autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                  }),
                  a.addEventListener(
                    window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
                    t => {
                      let i = window.cast.framework.SessionState;
                      switch (o = t.sessionState, l = t.session, t.sessionState) {
                        case i.NO_SESSION:
                          e.onStateChange?.('disconnected'),
                          n('disconnected');
                          break;
                        case i.SESSION_STARTING:
                          e.onStateChange?.('connecting'),
                          n('connecting');
                          break;
                        case i.SESSION_STARTED:
                          e.onStateChange?.('connected'),
                          n('connected');
                          break;
                        case i.SESSION_ENDING:
                          e.onStateChange?.('disconnecting'),
                          n('disconnecting');
                          break;
                        case i.SESSION_RESUMED:
                          e.onStateChange?.('connected'),
                          n('connected')
                      }
                    }
                  ),
                  a.addEventListener(
                    window.cast.framework.CastContextEventType.CAST_STATE_CHANGED,
                    t => {
                      let l = window.cast.framework.CastState;
                      switch (t.castState) {
                        case l.NO_DEVICES_AVAILABLE:
                          e.onCastAvailable?.(!1);
                          break;
                        case l.NOT_CONNECTED:
                        case l.CONNECTING:
                        case l.CONNECTED:
                          e.onCastAvailable?.(!0)
                      }
                    }
                  ),
                  t = !0,
                  i()
                } else a(Error('Cast API is not available'))
              },
              !window.chrome ||
              !window.chrome.cast
            ) {
              var r;
              (
                r = e.sdk ||
                'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1',
                new Promise(
                  (e, t) => {
                    let l = document.createElement('script');
                    l.src = r,
                    l.onload = e,
                    l.onerror = t,
                    document.body.appendChild(l)
                  }
                )
              ).catch(a)
            }
          }
        ),
        a = (t, l) => {
          let o = e.url ||
          t.option.url,
          n = new window.chrome.cast.media.MediaInfo(
            o,
            e.mimeType ||
            ({
              mp4: 'video/mp4',
              webm: 'video/webm',
              ogg: 'video/ogg',
              ogv: 'video/ogg',
              mp3: 'audio/mp3',
              wav: 'audio/wav',
              flv: 'video/x-flv',
              mov: 'video/quicktime',
              avi: 'video/x-msvideo',
              wmv: 'video/x-ms-wmv',
              mpd: 'application/dash+xml',
              m3u8: 'application/x-mpegURL'
            }) [o.split('?') [0].split('#') [0].split('.').pop().toLowerCase()] ||
            'application/octet-stream'
          ),
          i = new window.chrome.cast.media.LoadRequest(n);
          l.loadMedia(i).then(() => {
            t.notice.show = 'Casting started',
            e.onCastStart?.()
          }).catch(
            l => {
              throw t.notice.show = 'Error casting media',
              e.onError?.(l),
              l
            }
          )
        };
        return async n => (
          n.controls.add({
            name: 'chromecast',
            position: 'right',
            tooltip: 'Chromecast',
            html: `<i class="art-icon art-icon-cast">${ e.icon ||
            '<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 96H64v99c-13-2-26.4-3-40-3H0V96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H288V456c0-13.6-1-27-3-40H512V96zM24 224c128.1 0 232 103.9 232 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 344c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24z"/></svg>' }</i>`,
            click: async() => {
              if (!t) try {
                await i()
              } catch (t) {
                throw n.notice.show = 'Failed to initialize Cast API',
                e.onError?.(t),
                t
              }
              let o = window.cast.framework.CastContext.getInstance();
              if (l) a(n, l);
               else try {
                let e = await o.requestSession();
                a(n, e)
              } catch (t) {
                throw n.notice.show = 'Error connecting to cast session',
                e.onError?.(t),
                t
              }
            }
          }),
          {
            name: 'artplayerPluginChromecast',
            getCastState: () => o,
            isCasting: () => null !== l
          }
        )
      }
      l.d(t, {
        Z: function () {
          return o
        }
      })
    },
    42020: function (e, t, l) {
      'use strict';
      function o(e, t) {
        let l = new Map;
        return e.filter(e => {
          let o = e[t];
          return void 0 === o ||
          !l.has(o) &&
          l.set(o, 1)
        })
      }
      function n(e = {}) {
        return t => {
          let {
            $video: l
          }
          = t.template,
          {
            errorHandle: n
          }
          = t.constructor.utils;
          function i() {
            n(
              t.hls?.media === l,
              'Cannot find instance of HLS from "art.hls"'
            ),
            function (l) {
              if (!l.levels.length) return;
              let n = e.quality ||
              {
              },
              i = n.auto ||
              'Auto',
              a = n.title ||
              'Quality',
              r = n.getName ||
              (e => e.name || `${ e.height }P`),
              s = l.levels[l.currentLevel],
              c = s ? r(s) : i,
              d = o(
                l.levels.map((e, t) => ({
                  html: r(e, t),
                  value: t,
                default:
                  l.currentLevel === t
                })),
                'html'
              ).sort((e, t) => t.value - e.value);
              d.push({
                html: i,
                value: - 1,
              default:
                - 1 === l.currentLevel
              });
              let u = e => (
                l.currentLevel = e.value,
                t.notice.show = `${ a }: ${ e.html }`,
                n.control &&
                t.controls.check(e),
                n.setting &&
                t.setting.check(e),
                e.html
              );
              n.control &&
              t.controls.update({
                name: 'hls-quality',
                position: 'right',
                html: c,
                style: {
                  padding: '0 10px'
                },
                selector: d,
                onSelect: u
              }),
              n.setting &&
              t.setting.update({
                name: 'hls-quality',
                tooltip: c,
                html: a,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18"><path fill="#fff" d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>',
                width: 200,
                selector: d,
                onSelect: u
              })
            }(t.hls),
            function (l) {
              if (!l.audioTracks.length) return;
              let n = e.audio ||
              {
              },
              i = n.auto ||
              'Auto',
              a = n.title ||
              'Audio',
              r = n.getName ||
              (e => e.name || e.lang || e.language),
              s = l.audioTracks[l.audioTrack],
              c = s ? r(s) : i,
              d = o(
                l.audioTracks.map(
                  (e, t) => ({
                    html: r(e, t),
                    value: e.id,
                  default:
                    l.audioTrack === e.id
                  })
                ),
                'html'
              ),
              u = e => (
                l.audioTrack = e.value,
                t.notice.show = `${ a }: ${ e.html }`,
                n.control &&
                t.controls.check(e),
                n.setting &&
                t.setting.check(e),
                e.html
              );
              n.control &&
              t.controls.update({
                name: 'hls-audio',
                position: 'right',
                html: c,
                style: {
                  padding: '0 10px'
                },
                selector: d,
                onSelect: u
              }),
              n.setting &&
              t.setting.update({
                name: 'hls-audio',
                tooltip: c,
                html: a,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18"><path fill="#fff" d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>',
                width: 200,
                selector: d,
                onSelect: u
              })
            }(t.hls)
          }
          return t.on('ready', i),
          t.on('restart', i),
          {
            name: 'artplayerPluginHlsControl',
            update: i
          }
        }
      }
      l.d(t, {
        Z: function () {
          return n
        }
      })
    },
    4499: function (e, t, l) {
      'use strict';
      l.d(t, {
        $: function () {
          return s
        }
      });
      var o = l(93041),
      n = Object.defineProperty,
      i = (e, t, l) => t in e ? n(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
      }) : e[t] = l,
      a = (e, t, l) => i(e, 'symbol' != typeof t ? t + '' : t, l);
      let r = o.default ||
      o;
      class s {
        constructor() {
          a(this, 'name', 'HlsPlugin'),
          a(this, 'hls', null),
          a(this, 'core', null)
        }
        init(e) {
          this.core = e,
          this.core.events.on(
            'load',
            e => {
              'hls' === e.type ||
              e.url.includes('.m3u8') ? r.isSupported() ? this.loadHls(e.url) : this.core.video.canPlayType('application/vnd.apple.mpegurl') &&
              (this.core.video.src = e.url) : this.hls &&
              (this.hls.destroy(), this.hls = null)
            }
          ),
          this.core.events.on('quality-request', e => {
            this.hls &&
            (this.hls.currentLevel = e)
          }),
          this.core.events.on('audio-track-request', e => {
            this.hls &&
            (this.hls.audioTrack = e)
          })
        }
        loadHls(e) {
          this.hls &&
          this.hls.destroy(),
          this.hls = new r({
            autoStartLoad: !0,
            startLevel: - 1,
            capLevelToPlayerSize: !0
          }),
          this.hls.loadSource(e),
          this.hls.attachMedia(this.core.video),
          this.hls.on(
            r.Events.MANIFEST_PARSED,
            (e, t) => {
              let l = t.levels.map((e, t) => ({
                height: e.height,
                bitrate: e.bitrate,
                index: t
              }));
              this.core.store.setState({
                qualityLevels: l
              })
            }
          ),
          this.hls.on(
            r.Events.AUDIO_TRACKS_UPDATED,
            (e, t) => {
              let l = t.audioTracks.map(
                (e, t) => ({
                  label: e.name ||
                  e.lang ||
                  `Audio ${ t + 1 }`,
                  language: e.lang ||
                  '',
                  index: t
                })
              );
              this.core.store.setState({
                audioTracks: l,
                currentAudioTrack: this.hls.audioTrack
              })
            }
          ),
          this.hls.on(r.Events.LEVEL_SWITCHED, (e, t) => {
          }),
          this.hls.on(
            r.Events.ERROR,
            (e, t) => {
              if (t.fatal) {
                let e = t.details ||
                'Unknown HLS Error';
                this.core.triggerError(e, !0)
              }
            }
          )
        }
        destroy() {
          this.hls &&
          (this.hls.destroy(), this.hls = null)
        }
      }
    }
  }
  ]
);
