<template>
  <div class="card card">
    <div class="card__content">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="alert alert-info mb-4">
            <h4 class="mb-0">
              Nous ne trouvons pas
              <span class="text-primary">{{
                $route.params && $route.params.name
              }}</span>
              !
            </h4>
          </div>
        </div>
        <div class="col-md-12 text-left">
          <h5>Où puis-je trouver mon identifiant de compte ?</h5>
          <p>
            En jeu, allez dans Paramètres, puis dans l'onglet Compte. Sur cette
            page, sous "Informations du compte" se trouve un champ appelé ID de
            compte, copiez cette valeur et saisissez-la dans notre champs de
            recherche. Vous serez alors redirigé vers votre profil.
          </p>

          <h5>Guide pratique: obtenir le nom de votre compte Epic</h5>
          <p>
            Connectez-vous (NE PAS LIER) avec votre compte PlayStation ou Xbox
            sur le
            <a href="https://www.epicgames.com/fortnite/fr/news" target="_blank"
              >site officiel de Fortnite.</a
            >

            Si vous êtes déjà connecté à un compte, déconnectez-vous d'abord.
          </p>
          <img src="/images/error-tuto.png" class="img-fluid mb-3" alt="" />

          <ul>
            <li>
              Si vous y êtes invité, créez un nouveau compte Epic avec le nom
              d'affichage avec lequel vous souhaitez effectuer la recherche.
            </li>
            <li>
              Le nom de votre compte Epic doit être affiché dans le coin
              supérieur droit de la page.
            </li>
            <li>
              Revenez ici avec le nom de votre compte Epic et recherchez vos
              statistiques.
            </li>
          </ul>

          <h5>
            Lorsque je m'inscris, il est indiqué que mon nom est utilisé ?
          </h5>
          <p>
            Cela peut arriver. Vous pourriez avoir un autre compte Epic, ou
            quelqu'un d'autre l'a pris. Si vous connaissez ce compte, vous
            pouvez vous connecter à ce compte et changer son nom. Le nom devrait
            devenir disponible pour enregistrer votre nouveau compte Epic.
          </p>

          <h5>Puis-je dissocier mon compte et le lier à un autre ?</h5>

          <p>
            Non. Nous vous déconseillons fortement de dissocier votre compte
            PlayStation ou Xbox du compte Epic nouvellement créé. En faisant
            cela, il y a de fortes chances que vous perdiez votre progression et
            / ou les articles que vous avez acheté.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
