<template>
  <div class="card card--has-table">
    <div class="card__header"><h4>Matchs récents</h4></div>
    {{ matches.length }}
    <div class="card__content">
      <div class="table-responsive">
        <table class="table table-hover game-player-result">
          <thead>
            <tr>
              <th class="game-player-result__date text-left">Date</th>
              <th class="game-player-result__vs text-left">Versus</th>
              <th class="game-player-result__character text-left">Character</th>
              <th class="game-player-result__kills">Kills</th>
              <th class="game-player-result__deaths">Deaths</th>
              <th class="game-player-result__ast">Assists</th>
              <th class="game-player-result__pkills">Pentakills</th>
              <th class="game-player-result__mvp"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="game-player-result__date">06 - 12 - 2018</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img
                      src="assets/images/samples/logos/lucky_clovers_shield.png"
                      alt=""
                    />
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">Lucky Clovers</h6>
                    <span class="team-meta__place">Ireland</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__character highlight text-left">
                Valholl (Offensive)
              </td>
              <td class="game-player-result__kills highlight">7</td>
              <td class="game-player-result__deaths highlight">5</td>
              <td class="game-player-result__ast highlight">12</td>
              <td class="game-player-result__pkills highlight">0</td>
              <td class="game-player-result__mvp">
                <div
                  class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="game-player-result__date">06 - 19 - 2018</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img
                      src="assets/images/samples/logos/red_wings_shield.png"
                      alt=""
                    />
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">Red Wings</h6>
                    <span class="team-meta__place">Spain</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__character highlight text-left">
                Ragnark (Offensive)
              </td>
              <td class="game-player-result__kills highlight">5</td>
              <td class="game-player-result__deaths highlight">2</td>
              <td class="game-player-result__ast highlight">8</td>
              <td class="game-player-result__pkills highlight">2</td>
              <td class="game-player-result__mvp">
                <div
                  class="alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="game-player-result__date">06 - 26 - 2018</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img
                      src="assets/images/samples/logos/draconians_shield.png"
                      alt=""
                    />
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">Draconians</h6>
                    <span class="team-meta__place">Russia</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__character highlight text-left">
                Valholl (Offensive)
              </td>
              <td class="game-player-result__kills highlight">8</td>
              <td class="game-player-result__deaths highlight">7</td>
              <td class="game-player-result__ast highlight">16</td>
              <td class="game-player-result__pkills highlight">0</td>
              <td class="game-player-result__mvp">
                <div
                  class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="game-player-result__date">07 - 04 - 2018</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img
                      src="assets/images/samples/logos/aqua_keyes_shield.png"
                      alt=""
                    />
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">Aqua Keyes</h6>
                    <span class="team-meta__place">Italy</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__character highlight text-left">
                Valholl (Offensive)
              </td>
              <td class="game-player-result__kills highlight">9</td>
              <td class="game-player-result__deaths highlight">6</td>
              <td class="game-player-result__ast highlight">13</td>
              <td class="game-player-result__pkills highlight">1</td>
              <td class="game-player-result__mvp">
                <div
                  class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="game-player-result__date">07 - 09 - 2018</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img
                      src="assets/images/samples/logos/icarus_wings_shield.png"
                      alt=""
                    />
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">Icarus Wings</h6>
                    <span class="team-meta__place">Portugal</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__character highlight text-left">
                Ragnark (Offensive)
              </td>
              <td class="game-player-result__kills highlight">6</td>
              <td class="game-player-result__deaths highlight">8</td>
              <td class="game-player-result__ast highlight">19</td>
              <td class="game-player-result__pkills highlight">0</td>
              <td class="game-player-result__mvp">
                <div
                  class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="game-player-result__date">07 - 22 - 2018</td>
              <td class="game-player-result__vs">
                <div class="team-meta">
                  <figure class="team-meta__logo">
                    <img
                      src="assets/images/samples/logos/bloody_wave_shield.png"
                      alt=""
                    />
                  </figure>
                  <div class="team-meta__info">
                    <h6 class="team-meta__name">Bloody Wave</h6>
                    <span class="team-meta__place">Germany</span>
                  </div>
                </div>
              </td>
              <td class="game-player-result__character highlight text-left">
                Ragnark (Offensive)
              </td>
              <td class="game-player-result__kills highlight">4</td>
              <td class="game-player-result__deaths highlight">1</td>
              <td class="game-player-result__ast highlight">15</td>
              <td class="game-player-result__pkills highlight">0</td>
              <td class="game-player-result__mvp">
                <div
                  class="alc-icon--disabled alc-icon alc-icon--circle alc-icon--xs alc-icon--outline alc-icon--outline-md"
                >
                  <i class="fas fa-star"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matches: {
      type: Array,
      required: true,
    },
  },
}
</script>
