import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept!</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam aspernat ur eos labore maiores nihil quaerat. A beatae,
        eligendi, eos ipsa, maiores maxime minima nulla placeat praesentium
        quaerat qui ratione. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corporis earum explicabo fuga illo iste laboriosam, laudantium
        libero maxime molestiae nihil nobis odit, praesentium, provident
        quibusdam quod rerum sequi sint ut. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias animi, aperiam atque blanditiis
        delectus, distinctio dolorem eligendi facilis ipsum labore mollitia
        recusandae sequi totam ut vitae! Libero magnam molestias sequi? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Animi at deserunt
        dolores esse et ex id illum incidunt, ipsa ipsam magnam maiores maxime
        nostrum numquam qui quidem recusandae suscipit velit? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut eum fugit, id ipsum quam
        sit. Ab alias amet assumenda cupiditate, est, ex facere nostrum, officia
        quis reiciendis reprehenderit ut. Culpa! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Amet aspernatur dicta dolores, inventore
        iste laboriosam minima minus nemo qui repellat. Aliquid aperiam beatae
        consequuntur cum doloremque nulla obcaecati quia sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam aspernat ur eos labore maiores nihil quaerat. A beatae,
        eligendi, eos ipsa, maiores maxime minima nulla placeat praesentium
        quaerat qui ratione. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corporis earum explicabo fuga illo iste laboriosam, laudantium
        libero maxime molestiae nihil nobis odit, praesentium, provident
        quibusdam quod rerum sequi sint ut. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias animi, aperiam atque blanditiis
        delectus, distinctio dolorem eligendi facilis ipsum labore mollitia
        recusandae sequi totam ut vitae! Libero magnam molestias sequi? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Animi at deserunt
        dolores esse et ex id illum incidunt, ipsa ipsam magnam maiores maxime
        nostrum numquam qui quidem recusandae suscipit velit? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut eum fugit, id ipsum quam
        sit. Ab alias amet assumenda cupiditate, est, ex facere nostrum, officia
        quis reiciendis reprehenderit ut. Culpa! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Amet aspernatur dicta dolores, inventore
        iste laboriosam minima minus nemo qui repellat. Aliquid aperiam beatae
        consequuntur cum doloremque nulla obcaecati quia sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam aspernat ur eos labore maiores nihil quaerat. A beatae,
        eligendi, eos ipsa, maiores maxime minima nulla placeat praesentium
        quaerat qui ratione. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corporis earum explicabo fuga illo iste laboriosam, laudantium
        libero maxime molestiae nihil nobis odit, praesentium, provident
        quibusdam quod rerum sequi sint ut. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias animi, aperiam atque blanditiis
        delectus, distinctio dolorem eligendi facilis ipsum labore mollitia
        recusandae sequi totam ut vitae! Libero magnam molestias sequi? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Animi at deserunt
        dolores esse et ex id illum incidunt, ipsa ipsam magnam maiores maxime
        nostrum numquam qui quidem recusandae suscipit velit? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut eum fugit, id ipsum quam
        sit. Ab alias amet assumenda cupiditate, est, ex facere nostrum, officia
        quis reiciendis reprehenderit ut. Culpa! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Amet aspernatur dicta dolores, inventore
        iste laboriosam minima minus nemo qui repellat. Aliquid aperiam beatae
        consequuntur cum doloremque nulla obcaecati quia sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam aspernat ur eos labore maiores nihil quaerat. A beatae,
        eligendi, eos ipsa, maiores maxime minima nulla placeat praesentium
        quaerat qui ratione. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corporis earum explicabo fuga illo iste laboriosam, laudantium
        libero maxime molestiae nihil nobis odit, praesentium, provident
        quibusdam quod rerum sequi sint ut. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias animi, aperiam atque blanditiis
        delectus, distinctio dolorem eligendi facilis ipsum labore mollitia
        recusandae sequi totam ut vitae! Libero magnam molestias sequi? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Animi at deserunt
        dolores esse et ex id illum incidunt, ipsa ipsam magnam maiores maxime
        nostrum numquam qui quidem recusandae suscipit velit? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut eum fugit, id ipsum quam
        sit. Ab alias amet assumenda cupiditate, est, ex facere nostrum, officia
        quis reiciendis reprehenderit ut. Culpa! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Amet aspernatur dicta dolores, inventore
        iste laboriosam minima minus nemo qui repellat. Aliquid aperiam beatae
        consequuntur cum doloremque nulla obcaecati quia sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam aspernat ur eos labore maiores nihil quaerat. A beatae,
        eligendi, eos ipsa, maiores maxime minima nulla placeat praesentium
        quaerat qui ratione. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corporis earum explicabo fuga illo iste laboriosam, laudantium
        libero maxime molestiae nihil nobis odit, praesentium, provident
        quibusdam quod rerum sequi sint ut. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias animi, aperiam atque blanditiis
        delectus, distinctio dolorem eligendi facilis ipsum labore mollitia
        recusandae sequi totam ut vitae! Libero magnam molestias sequi? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Animi at deserunt
        dolores esse et ex id illum incidunt, ipsa ipsam magnam maiores maxime
        nostrum numquam qui quidem recusandae suscipit velit? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut eum fugit, id ipsum quam
        sit. Ab alias amet assumenda cupiditate, est, ex facere nostrum, officia
        quis reiciendis reprehenderit ut. Culpa! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Amet aspernatur dicta dolores, inventore
        iste laboriosam minima minus nemo qui repellat. Aliquid aperiam beatae
        consequuntur cum doloremque nulla obcaecati quia sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam aspernat ur eos labore maiores nihil quaerat. A beatae,
        eligendi, eos ipsa, maiores maxime minima nulla placeat praesentium
        quaerat qui ratione. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Corporis earum explicabo fuga illo iste laboriosam, laudantium
        libero maxime molestiae nihil nobis odit, praesentium, provident
        quibusdam quod rerum sequi sint ut. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias animi, aperiam atque blanditiis
        delectus, distinctio dolorem eligendi facilis ipsum labore mollitia
        recusandae sequi totam ut vitae! Libero magnam molestias sequi? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Animi at deserunt
        dolores esse et ex id illum incidunt, ipsa ipsam magnam maiores maxime
        nostrum numquam qui quidem recusandae suscipit velit? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut eum fugit, id ipsum quam
        sit. Ab alias amet assumenda cupiditate, est, ex facere nostrum, officia
        quis reiciendis reprehenderit ut. Culpa! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Amet aspernatur dicta dolores, inventore
        iste laboriosam minima minus nemo qui repellat. Aliquid aperiam beatae
        consequuntur cum doloremque nulla obcaecati quia sit.
      </p>
    </div>
  );
}

export default ModalPage;
