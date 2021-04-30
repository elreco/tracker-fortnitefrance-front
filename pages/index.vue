<template>
  <div>
    <news-slider />
    <div class="site-content">
      <div class="container">
        <div class="row">
          <div class="content col-lg-8">
            <news-grid />
          </div>
          <div id="sidebar" class="sidebar col-lg-4">
            <!-- Widget: Standings -->
            <aside class="widget card widget--sidebar widget-standings">
              <div class="widget__title card__header card__header--has-btn">
                <h4>L.O. Heroes Standings</h4>
                <a href="#" class="btn btn-default btn-xs card-header__button"
                  >See All Stats</a
                >
              </div>
              <div class="widget__content card__content">
                <div class="table-responsive">
                  <table class="table table-hover table-standings">
                    <thead>
                      <tr>
                        <th>Team Positions</th>
                        <th>Overall Record</th>
                        <th>Match Record</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td>
                          <div class="team-meta">
                            <figure class="team-meta__logo">
                              <img
                                src="/images/samples/logos/pirates_shield.png"
                                alt="L.A. Pirates"
                              />
                            </figure>
                            <div class="team-meta__info">
                              <h6 class="team-meta__name">L.A. Pirates</h6>
                              <span class="team-meta__place"
                                >United States</span
                              >
                            </div>
                          </div>
                        </td>
                        <td>14 - 2</td>
                        <td>28 - 14</td>
                      </tr>
                      <tr class="">
                        <td>
                          <div class="team-meta">
                            <figure class="team-meta__logo">
                              <img
                                src="/images/samples/logos/sharks_shield.png"
                                alt="Sharks"
                              />
                            </figure>
                            <div class="team-meta__info">
                              <h6 class="team-meta__name">Sharks</h6>
                              <span class="team-meta__place">South Korea</span>
                            </div>
                          </div>
                        </td>
                        <td>12 - 4</td>
                        <td>27 - 13</td>
                      </tr>
                      <tr class="highlighted">
                        <td>
                          <div class="team-meta">
                            <figure class="team-meta__logo">
                              <img
                                src="/images/esports/logos/alchemists-22x25.png"
                                alt="The Alchemists"
                              />
                            </figure>
                            <div class="team-meta__info">
                              <h6 class="team-meta__name">The Alchemists</h6>
                              <span class="team-meta__place"
                                >United States</span
                              >
                            </div>
                          </div>
                        </td>
                        <td>11 - 5</td>
                        <td>26 - 11</td>
                      </tr>
                      <tr class="">
                        <td>
                          <div class="team-meta">
                            <figure class="team-meta__logo">
                              <img
                                src="/images/samples/logos/ocean_kings_shield.png"
                                alt="Ocean Kings"
                              />
                            </figure>
                            <div class="team-meta__info">
                              <h6 class="team-meta__name">Ocean Kings</h6>
                              <span class="team-meta__place">Japan</span>
                            </div>
                          </div>
                        </td>
                        <td>9 - 7</td>
                        <td>20 - 19</td>
                      </tr>
                      <tr class="">
                        <td>
                          <div class="team-meta">
                            <figure class="team-meta__logo">
                              <img
                                src="/images/samples/logos/red_wings_shield.png"
                                alt="Red Wings"
                              />
                            </figure>
                            <div class="team-meta__info">
                              <h6 class="team-meta__name">Red Wings</h6>
                              <span class="team-meta__place">Canada</span>
                            </div>
                          </div>
                        </td>
                        <td>8 - 8</td>
                        <td>20 - 20</td>
                      </tr>
                      <tr class="">
                        <td>
                          <div class="team-meta">
                            <figure class="team-meta__logo">
                              <img
                                src="/images/samples/logos/lucky_clovers_shield.png"
                                alt="Lucky Clovers"
                              />
                            </figure>
                            <div class="team-meta__info">
                              <h6 class="team-meta__name">Lucky Clovers</h6>
                              <span class="team-meta__place">Ireland</span>
                            </div>
                          </div>
                        </td>
                        <td>7 - 9</td>
                        <td>19 - 21</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </aside>
            <!-- Widget: Standings / End -->

            <!-- Widget: Twitch Streams -->
            <aside class="widget widget--sidebar widget-twitch">
              <div class="twitch-streams">
                <!-- Stream #0 -->
                <div class="twitch-stream-wrapper">
                  <a
                    href="#"
                    class="twitch-stream twitch-stream--featured twitch-stream--has-video card"
                  >
                    <div
                      class="twitch-stream__overlay twitch-stream__overlay--bg0 effect-duotone effect-duotone--base"
                    ></div>
                    <figure
                      class="twitch-stream__img twitch-stream__img--extra-top"
                    >
                      <img
                        src="/images/esports/samples/twitch-streamer-1.png"
                        alt=""
                      />
                    </figure>
                    <div class="twitch-stream__body">
                      <h6 class="twitch-stream__featured">Featured Stream</h6>
                      <h5 class="twitch-stream__title">
                        Destroy Plays Xenowatch
                      </h5>
                      <div class="twitch-stream__info">
                        Joined by Kelly and Saki
                      </div>

                      <div
                        class="twitch-stream__status twitch-stream__status--online"
                      >
                        Live
                      </div>
                    </div>
                  </a>

                  <div class="twitch-stream-video card">
                    <div class="card__content">
                      <div
                        class="alc-embeded-player"
                        data-id="amaz"
                        data-controls="false"
                        data-provider="twitch"
                        data-thumbnail="/images/esports/samples/twitch-stream-cover.jpg"
                        data-easy-embed
                      >
                        <div class="alc-embeded-player__overlay">
                          <i class="fas fa-play alc-embeded-player__icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Stream #0 / End -->
                <!-- Stream #1 -->
                <div class="twitch-stream-wrapper">
                  <a href="#" class="twitch-stream card">
                    <div
                      class="twitch-stream__overlay twitch-stream__overlay--bg1 effect-duotone effect-duotone--base"
                    ></div>
                    <figure class="twitch-stream__img">
                      <img
                        src="/images/esports/samples/twitch-streamer-2.png"
                        alt=""
                      />
                    </figure>
                    <div class="twitch-stream__body">
                      <h5 class="twitch-stream__title">
                        Assassins League Gameplay
                      </h5>
                      <div class="twitch-stream__info">
                        We start the adventure mode!
                      </div>

                      <div
                        class="twitch-stream__status twitch-stream__status--online"
                      >
                        Live
                      </div>
                    </div>
                  </a>
                </div>
                <!-- Stream #1 / End -->
                <!-- Stream #2 -->
                <div class="twitch-stream-wrapper">
                  <a href="#" class="twitch-stream card">
                    <div
                      class="twitch-stream__overlay twitch-stream__overlay--bg2 effect-duotone effect-duotone--base"
                    ></div>
                    <figure class="twitch-stream__img">
                      <img
                        src="/images/esports/samples/twitch-streamer-3.png"
                        alt=""
                      />
                    </figure>
                    <div class="twitch-stream__body">
                      <h5 class="twitch-stream__title">
                        League of Heroes: Ether Quest
                      </h5>
                      <div class="twitch-stream__info">
                        I’m gonna take the hardest quest
                      </div>

                      <div
                        class="twitch-stream__status twitch-stream__status--scheduled"
                      >
                        Starts in:
                        <div
                          class="twitch-stream__countdown-counter countdown-counter"
                          data-date="June 18, 2021 21:00:00"
                        ></div>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- Stream #2 / End -->
                <!-- Stream #3 -->
                <div class="twitch-stream-wrapper">
                  <a href="#" class="twitch-stream card">
                    <div
                      class="twitch-stream__overlay twitch-stream__overlay--bg3 effect-duotone effect-duotone--base"
                    ></div>
                    <figure class="twitch-stream__img">
                      <img
                        src="/images/esports/samples/twitch-streamer-4.png"
                        alt=""
                      />
                    </figure>
                    <div class="twitch-stream__body">
                      <h5 class="twitch-stream__title">
                        The Game Huntress&#x27;s Channel
                      </h5>
                      <div class="twitch-stream__info">
                        Join me to hunt them all!
                      </div>

                      <div
                        class="twitch-stream__status twitch-stream__status--offline"
                      >
                        Offline
                      </div>
                    </div>
                  </a>
                </div>
                <!-- Stream #3 / End -->
              </div>
            </aside>
            <!-- Widget: Twitch Streams / End -->

            <!-- Widget: Event Result -->
            <aside class="widget card widget--sidebar widget-game-result">
              <div class="widget__title card__header card__header--has-btn">
                <h4>Last Game Result</h4>
                <a href="#" class="btn btn-default btn-xs card-header__button"
                  >See All Results</a
                >
              </div>
              <div class="widget__content card__content">
                <!-- Game Score -->
                <div class="widget-game-result__section">
                  <div class="widget-game-result__section-inner">
                    <header
                      class="widget-game-result__header widget-game-result__header--alt widget-game-result__header--alt-compact mb-4"
                    >
                      <h3 class="widget-game-result__title">Striker GO</h3>
                      <time
                        class="widget-game-result__date"
                        datetime="2018-04-26"
                        >Friday, April 26th</time
                      >
                    </header>

                    <header class="widget-game-result__header">
                      <h3 class="widget-game-result__title">
                        Pro League - World Championship
                      </h3>
                      <div class="widget-game-result__subtitle">
                        Quater-Finals
                      </div>
                    </header>

                    <div class="widget-game-result__main">
                      <!-- 1st Team -->
                      <div
                        class="widget-game-result__team widget-game-result__team--first"
                      >
                        <figure class="widget-game-result__team-logo">
                          <a href="#"
                            ><img
                              src="/images/esports/logos/alchemists-86x98.png"
                              alt=""
                          /></a>
                        </figure>
                        <div class="widget-game-result__team-info">
                          <h5 class="widget-game-result__team-name">
                            Alchemists
                          </h5>
                          <div class="widget-game-result__team-desc">
                            United States
                          </div>
                        </div>
                      </div>
                      <!-- 1st Team / End -->

                      <div class="widget-game-result__score-wrap">
                        <div class="widget-game-result__score">
                          <span
                            class="widget-game-result__score-result widget-game-result__score-result--winner"
                            >2</span
                          >
                          <span class="widget-game-result__score-dash">-</span>
                          <span
                            class="widget-game-result__score-result widget-game-result__score-result--loser"
                            >1</span
                          >
                        </div>
                        <a
                          href="https://www.youtube.com/watch?v=XE0fU9PCrWE"
                          class="widget-game-result__score-video-icon mp_iframe"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Watch Replay"
                          ><i class="fas fa-play"></i
                        ></a>
                      </div>

                      <!-- 2nd Team -->
                      <div
                        class="widget-game-result__team widget-game-result__team--second"
                      >
                        <figure class="widget-game-result__team-logo">
                          <a href="#"
                            ><img
                              src="/images/esports/logos/pirates-114x98.png"
                              alt=""
                          /></a>
                        </figure>
                        <div class="widget-game-result__team-info">
                          <h5 class="widget-game-result__team-name">
                            L.A. Pirates
                          </h5>
                          <div class="widget-game-result__team-desc">
                            United States
                          </div>
                        </div>
                      </div>
                      <!-- 2nd Team / End -->
                    </div>
                  </div>
                </div>
                <!-- Game Score / End -->

                <!-- Game Statistics -->
                <div class="widget-game-result__section">
                  <header
                    class="widget-game-result__subheader card__subheader card__subheader--sm card__subheader--nomargins"
                  >
                    <h5 class="widget-game-result__subtitle">
                      Match Statistics
                    </h5>
                  </header>
                  <div class="widget-game-result__section-inner">
                    <!-- Progress Stats Table -->
                    <table class="progress-table progress-table--sm-space">
                      <tbody>
                        <tr>
                          <td
                            class="progress-table__progress-label progress-table__progress-label--highlight"
                          >
                            56
                          </td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--first"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar"
                                style="width: 60%"
                                role="progressbar"
                                aria-valuenow="56"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__title">Total Kills</td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--second"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar progress__bar--custom-color-1"
                                style="width: 40%"
                                role="progressbar"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__progress-label">40</td>
                        </tr>
                        <tr>
                          <td class="progress-table__progress-label">23</td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--first"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar"
                                style="width: 30%"
                                role="progressbar"
                                aria-valuenow="23"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__title">Total Deaths</td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--second"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar progress__bar--custom-color-1"
                                style="width: 70%"
                                role="progressbar"
                                aria-valuenow="38"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td
                            class="progress-table__progress-label progress-table__progress-label--highlight"
                          >
                            38
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="progress-table__progress-label progress-table__progress-label--highlight"
                          >
                            14
                          </td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--first"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar"
                                style="width: 70%"
                                role="progressbar"
                                aria-valuenow="14"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__title">Total Assists</td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--second"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar progress__bar--custom-color-1"
                                style="width: 30%"
                                role="progressbar"
                                aria-valuenow="6"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__progress-label">6</td>
                        </tr>
                        <tr>
                          <td
                            class="progress-table__progress-label progress-table__progress-label--highlight"
                          >
                            19
                          </td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--first"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar"
                                style="width: 60%"
                                role="progressbar"
                                aria-valuenow="19"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__title">Pentakills</td>
                          <td
                            class="progress-table__progress-bar progress-table__progress-bar--second"
                          >
                            <div class="progress progress--lines">
                              <div
                                class="progress__bar progress__bar--custom-color-1"
                                style="width: 40%"
                                role="progressbar"
                                aria-valuenow="12"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td class="progress-table__progress-label">12</td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Progress Stats Table / End -->
                  </div>
                </div>
                <!-- Game Statistics / End -->

                <!-- Match MVP -->
                <div class="widget-game-result__section">
                  <header
                    class="widget-game-result__subheader card__subheader card__subheader--sm card__subheader--nomargins"
                  >
                    <h5 class="widget-game-result__subtitle">Match MVP</h5>
                  </header>
                  <div class="widget-game-result__section-inner">
                    <!-- MVP -->
                    <div class="game-result__mvp">
                      <div class="game-result__mvp-player">
                        <div class="game-result__mvp-player-icon-holder">
                          <span class="game-result__mvp-player-icon"
                            ><i class="far fa-star"></i
                          ></span>
                        </div>
                        <div class="game-result__mvp-player-meta">
                          <h6 class="game-result__mvp-player-name">
                            Destroy Spiegel
                          </h6>
                          <span class="game-result__mvp-player-team"
                            >The Alchemists</span
                          >
                        </div>
                      </div>
                      <div class="game-result__mvp-stats">
                        <ul class="game-result__mvp-stats-list list-unstyled">
                          <li class="game-result__mvp-stats-item">
                            <span class="game-result__mvp-stats-value">37</span>
                            <span class="game-result__mvp-stats-label"
                              >Kills</span
                            >
                          </li>
                          <li class="game-result__mvp-stats-item">
                            <span class="game-result__mvp-stats-value">2</span>
                            <span class="game-result__mvp-stats-label"
                              >Deaths</span
                            >
                          </li>
                          <li class="game-result__mvp-stats-item">
                            <span class="game-result__mvp-stats-value">9</span>
                            <span class="game-result__mvp-stats-label"
                              >Assists</span
                            >
                          </li>
                          <li class="game-result__mvp-stats-item">
                            <span class="game-result__mvp-stats-value">13</span>
                            <span class="game-result__mvp-stats-label"
                              >Pentakills</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- MVP / End -->
                  </div>
                </div>
                <!-- Match MVP / End -->
              </div>
            </aside>
            <!-- Widget: Event Result / End -->

            <!-- Widget: Trending News -->
            <aside class="widget widget--sidebar card widget-tabbed">
              <div class="widget__title card__header">
                <h4>Top Trending News</h4>
              </div>
              <div class="widget__content card__content">
                <div class="widget-tabbed__tabs">
                  <!-- Widget Tabs -->
                  <ul
                    class="nav nav-tabs nav-justified widget-tabbed__nav"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        href="#widget-tabbed-newest"
                        class="nav-link active"
                        aria-controls="widget-tabbed-newest"
                        role="tab"
                        data-toggle="tab"
                        >Newest</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="#widget-tabbed-commented"
                        class="nav-link"
                        aria-controls="widget-tabbed-commented"
                        role="tab"
                        data-toggle="tab"
                        >Most Commented</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        href="#widget-tabbed-popular"
                        class="nav-link"
                        aria-controls="widget-tabbed-popular"
                        role="tab"
                        data-toggle="tab"
                        >Popular</a
                      >
                    </li>
                  </ul>

                  <!-- Widget Tab panes -->
                  <div class="tab-content widget-tabbed__tab-content">
                    <!-- Newest -->
                    <div
                      id="widget-tabbed-newest"
                      role="tabpanel"
                      class="tab-pane fade show active"
                    >
                      <ul class="posts posts--simple-list">
                        <li class="posts__item posts__item--category-4">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img4-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-4"
                                >Xenowatch</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >Xenowatch&#x27;s new patch will fix the faces
                                bugs</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >September 27th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-2">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img2-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-2"
                                >L.O. Heroes</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >A new mage character is coming to the League</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 5th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-3">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img8-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-3"
                                >Striker GO</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >New Tech vehicles will be added in July&#x27;s
                                patch</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >September 5th, 2018</time
                            >
                          </div>
                        </li>
                        <li
                          class="posts__item posts__item--category-1 posts__item--category-4"
                        >
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img1-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-1"
                                >The Team</span
                              ><span
                                class="label posts__cat-label posts__cat-label--category-4"
                                >Xenowatch</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >The Alchemists reach to the Xenowatch finals</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 14th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-1">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img6-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-1"
                                >The Team</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >The Alchemists welcome &quot;Logan-X&quot; to
                                the team</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 14th, 2018</time
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- Commented -->
                    <div
                      id="widget-tabbed-commented"
                      role="tabpanel"
                      class="tab-pane fade"
                    >
                      <ul class="posts posts--simple-list">
                        <li class="posts__item posts__item--category-3">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img8-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-3"
                                >Striker GO</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >New Teach vehicles will be added in July&#x27;s
                                patch</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >September 5th, 2018</time
                            >
                          </div>
                        </li>
                        <li
                          class="posts__item posts__item--category-1 posts__item--category-4"
                        >
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img4-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-1"
                                >The Team</span
                              ><span
                                class="label posts__cat-label posts__cat-label--category-4"
                                >Xenowatch</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >The Alchemists reach to the Xenowatch finals</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 14th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-1">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img6-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-1"
                                >The Team</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >The Alchemists welcome &quot;Logan-X&quot; to
                                the team</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 14th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-4">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img1-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-4"
                                >Xenowatch</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >Xenowatch&#x27;s new patch will fix the faces
                                bugs</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >September 27th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-2">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img2-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-2"
                                >L.O. Heroes</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >A new mage character is coming to the League</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 5th, 2018</time
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- Popular -->
                    <div
                      id="widget-tabbed-popular"
                      role="tabpanel"
                      class="tab-pane fade"
                    >
                      <ul class="posts posts--simple-list">
                        <li class="posts__item posts__item--category-1">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img6-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-1"
                                >The Team</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >The Alchemists welcome &quot;Logan-X&quot; to
                                the team</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 14th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-2">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img2-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-2"
                                >L.O. Heroes</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >A new mage character is coming to the League</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 5th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-4">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img1-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-4"
                                >Xenowatch</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >Xenowatch&#x27;s new patch will fix the faces
                                bugs</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >September 27th, 2018</time
                            >
                          </div>
                        </li>
                        <li
                          class="posts__item posts__item--category-1 posts__item--category-4"
                        >
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img4-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-1"
                                >The Team</span
                              ><span
                                class="label posts__cat-label posts__cat-label--category-4"
                                >Xenowatch</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >The Alchemists reach to the Xenowatch finals</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >August 14th, 2018</time
                            >
                          </div>
                        </li>
                        <li class="posts__item posts__item--category-3">
                          <figure class="posts__thumb posts__thumb--hover">
                            <a href="_esports_blog-post-1.html"
                              ><img
                                src="/images/esports/samples/post-img8-sidebar-xs.jpg"
                                alt=""
                            /></a>
                          </figure>
                          <div class="posts__inner">
                            <div class="posts__cat">
                              <span
                                class="label posts__cat-label posts__cat-label--category-3"
                                >Striker GO</span
                              >
                            </div>
                            <h6 class="posts__title posts__title--color-hover">
                              <a href="_esports_blog-post-1.html"
                                >New Teach vehicles will be added in July&#x27;s
                                patch</a
                              >
                            </h6>
                            <time datetime="2018-09-27" class="posts__date"
                              >September 5th, 2018</time
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <!-- Widget: Trending News / End -->

            <!-- Widget: Events Calendar -->
            <aside
              class="widget card card--no-paddings widget--sidebar widget-event-calendar"
            >
              <div class="widget__title card__header">
                <h4>Events Calendar</h4>
              </div>
              <div class="widget__content card__content">
                <!-- Events Calendar -->
                <div class="alc-event-calendar">
                  <table class="table">
                    <caption>
                      <span class="alc-event-calendar__caption-inner">
                        <span
                          class="alc-event-calendar__caption-nav alc-event-calendar__caption-nav--prev"
                        >
                          <a
                            href="#"
                            class="alc-event-calendar__caption-nav-link"
                          ></a>
                        </span>
                        <span class="alc-event-calendar__caption-title"
                          >November 2018</span
                        >
                        <span
                          class="alc-event-calendar__caption-nav alc-event-calendar__caption-nav--next"
                        >
                          <a
                            href="#"
                            class="alc-event-calendar__caption-nav-link"
                          ></a>
                        </span>
                      </span>
                    </caption>
                    <thead>
                      <tr>
                        <th data-weekday-abbr="Mon">
                          <span class="weekday">Mo</span>
                        </th>
                        <th data-weekday-abbr="Tue">
                          <span class="weekday">Tu</span>
                        </th>
                        <th data-weekday-abbr="Wed">
                          <span class="weekday">We</span>
                        </th>
                        <th data-weekday-abbr="Thu">
                          <span class="weekday">Th</span>
                        </th>
                        <th data-weekday-abbr="Fri">
                          <span class="weekday">Fr</span>
                        </th>
                        <th data-weekday-abbr="Sat">
                          <span class="weekday">Sa</span>
                        </th>
                        <th data-weekday-abbr="Sun">
                          <span class="weekday">Su</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span class="day day--muted">28</span>
                        </td>
                        <td>
                          <span class="day day--muted">29</span>
                        </td>
                        <td>
                          <span class="day day--muted">30</span>
                        </td>
                        <td>
                          <span class="day day--muted">31</span>
                        </td>
                        <td>
                          <span class="day">1</span>
                        </td>
                        <td>
                          <span class="day">2</span>
                        </td>
                        <td>
                          <span class="day">3</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="day">4</span>
                        </td>
                        <td>
                          <span class="day">5</span>
                        </td>
                        <td>
                          <span class="day">6</span>
                        </td>
                        <td>
                          <span class="day">7</span>
                        </td>
                        <td>
                          <span class="day">8</span>
                        </td>
                        <td>
                          <span class="day day--active day--type-1">9</span>
                        </td>
                        <td>
                          <span class="day">10</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="day">11</span>
                        </td>
                        <td>
                          <span class="day">12</span>
                        </td>
                        <td>
                          <span class="day">13</span>
                        </td>
                        <td>
                          <span class="day">14</span>
                        </td>
                        <td>
                          <span class="day">15</span>
                        </td>
                        <td>
                          <span class="day">16</span>
                        </td>
                        <td>
                          <span class="day">17</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="day">18</span>
                        </td>
                        <td>
                          <span class="day">19</span>
                        </td>
                        <td>
                          <span class="day day--active day--type-4">20</span>
                        </td>
                        <td>
                          <span class="day">21</span>
                        </td>
                        <td>
                          <span class="day">22</span>
                        </td>
                        <td>
                          <span class="day">23</span>
                        </td>
                        <td>
                          <span class="day">24</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span class="day">25</span>
                        </td>
                        <td>
                          <span class="day">26</span>
                        </td>
                        <td>
                          <span class="day">27</span>
                        </td>
                        <td>
                          <span class="day">28</span>
                        </td>
                        <td>
                          <span class="day">29</span>
                        </td>
                        <td>
                          <span class="day">30</span>
                        </td>
                        <td>
                          <span class="day day--muted">1</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- Events Calendar / End -->

                <!-- Events List -->
                <ul class="alc-event-list list-unstyled">
                  <li
                    class="alc-event-list__item alc-event-list-item alc-event-list-item--type-1"
                  >
                    <div class="alc-event-list-item__header">
                      <time class="alc-event-list-item__date"
                        >Friday, September 9th</time
                      >
                    </div>
                    <div class="alc-event-list-item__body">
                      <div class="alc-event-list-item__time">09:00 PM</div>
                      <div class="alc-event-list-item__info">
                        <h6 class="alc-event-list-item__title">
                          <a href="_esports_event-overview-1a.html"
                            >Game Huntress "Inktoon 2" Stream</a
                          >
                        </h6>
                        <p class="alc-event-list-item__desc">
                          Join me to play the multiplayer
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    class="alc-event-list__item alc-event-list-item alc-event-list-item--type-4"
                  >
                    <div class="alc-event-list-item__header">
                      <time class="alc-event-list-item__date"
                        >Tuesday, September 20th</time
                      >
                    </div>
                    <div class="alc-event-list-item__body">
                      <div class="alc-event-list-item__time">11:00 PM</div>
                      <div class="alc-event-list-item__info">
                        <h6 class="alc-event-list-item__title">
                          <a href="_esports_event-overview-1b.html"
                            >Xenowatch Patch 5.6 Update Release</a
                          >
                        </h6>
                        <p class="alc-event-list-item__desc">
                          Bug fixes and a new character!
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsSlider from '@/components/news/Slider'
import NewsGrid from '@/components/news/Grid'

export default {
  components: {
    NewsSlider,
    NewsGrid,
  },
}
</script>
