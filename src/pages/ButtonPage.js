import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoInfo,
  GoPencil,
} from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button className="my-3" success outline rounded>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button className="my-3" danger outline>
          <GoCloudDownload />
          Click me
        </Button>
      </div>
      <div>
        <Button className="my-3" warning>
          <GoDatabase />
          Click me
        </Button>
      </div>
      <div>
        <Button className="my-3" secondary outline>
          <GoInfo />
          Click me
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoPencil />
          Click me
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
