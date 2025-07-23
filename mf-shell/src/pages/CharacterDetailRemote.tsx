import { lazy, Suspense } from "react";

const RemoteDetailApp = lazy(() => import("mfCharacterDetail/CharacterDetailApp").then(module => ({ default: module.default })));

const CharacterDetailRemote = () => (
  <Suspense fallback={<div className="container mt-5">Cargando microfrontend...</div>}>
    <RemoteDetailApp />
  </Suspense>
);

export default CharacterDetailRemote;
