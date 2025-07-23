import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

const RemoteCharactersApp = lazy(() => import("mfCharacters/CharactersApp").then(module => ({ default: module.default })));

const CharactersRemote = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Suspense fallback={<div className="container mt-5">Cargando microfrontend...</div>}>
      <RemoteCharactersApp searchParams={searchParams} setSearchParams={setSearchParams} />
    </Suspense>
  )
}

export default CharactersRemote;
