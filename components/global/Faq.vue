<template>
  <div id="accordionFaqs" class="accordion accordion--space-between">
    <div class="card">
      <div id="heading-0" class="card__header">
        <h5 class="mb-0">
          <button
            class="btn btn-link accordion__header-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-0"
            aria-expanded="true"
            aria-controls="collapse-0"
          >
            Les statistiques sont-elles exactes ?
            <span class="accordion__header-link-icon"></span>
          </button>
        </h5>
      </div>
      <div
        id="collapse-0"
        class="collapse show"
        aria-labelledby="heading-0"
        data-parent="#accordionFaqs"
      >
        <div class="card__content">
          <h4>Oui</h4>
          <p>
            Au moment de la mise jour du profil, les statistiques sont précises
            à 100%.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div id="heading-1" class="card__header">
        <h5 class="mb-0">
          <button
            class="btn btn-link accordion__header-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-1"
            aria-expanded="false"
            aria-controls="collapse-1"
          >
            Comment mettre à jour mes statistiques ?
            <span class="accordion__header-link-icon"></span>
          </button>
        </h5>
      </div>
      <div
        id="collapse-1"
        class="collapse"
        aria-labelledby="heading-1"
        data-parent="#accordionFaqs"
      >
        <div class="card__content">
          <h4>C'est automatique</h4>
          <p>
            Les statistiques sont mises à jours automatiquement. Nos serveurs
            mettent à jour les profils de chaque joueur toutes les 3 minutes
            environ.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div id="heading-2" class="card__header">
        <h5 class="mb-0">
          <button
            class="btn btn-link accordion__header-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-2"
            aria-expanded="false"
            aria-controls="collapse-2"
          >
            Je ne trouve pas mon profil.
            <span class="accordion__header-link-icon"></span>
          </button>
        </h5>
      </div>
      <div
        id="collapse-2"
        class="collapse"
        aria-labelledby="heading-2"
        data-parent="#accordionFaqs"
      >
        <div class="card__content">
          <p>
            La raison la plus courante est que vous n'avez pas entré votre nom
            d'utilisateur correctement ou alors que le partage public de vos
            statistiques est désactivé.
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div id="heading-3" class="card__header">
        <h5 class="mb-0">
          <button
            class="btn btn-link accordion__header-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-3"
            aria-expanded="false"
            aria-controls="collapse-3"
          >
            Ce site est-t-il lié à Epic Games ?
            <span class="accordion__header-link-icon"></span>
          </button>
        </h5>
      </div>
      <div
        id="collapse-3"
        class="collapse"
        aria-labelledby="heading-3"
        data-parent="#accordionFaqs"
      >
        <div class="card__content">
          <h4>Non</h4>
          <p>
            Fortnite France a été créé par Alexandre Le Corre, un indépendant
            non affilié à Epic Games.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
