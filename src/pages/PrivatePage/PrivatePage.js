import LogoutAction from 'components/LogoutAction/LogoutAction';
import { useFilms } from 'hooks/use-films';

export default function PrivatePage() {
  const { films, set } = useFilms();

  return (
    <div>
      Private Page <LogoutAction />
      <button
        onClick={(event) => {
          set([{ title: 'holi' }]);
        }}
      >
        Feed store
      </button>
      <pre>{JSON.stringify(films, null, 2)}</pre>
    </div>
  );
}
