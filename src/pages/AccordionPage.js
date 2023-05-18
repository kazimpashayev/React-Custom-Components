import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'a',
      label: 'Can I use React on a project?',
      content:
        'You can use React on a project you want You can use React on a project you want You can use React on a project you want You can use React on a project you want',
    },
    {
      id: 'b',
      label: 'Can I use JavaScript on a project?',
      content:
        'You can use JavaScript on a project you want You can use JavaScript on a project you want You can use JavaScript on a project you want You can use JavaScript on a project you want',
    },
    {
      id: 'c',
      label: 'Can I use Php on a project?',
      content:
        'You can use Php on a project you want You can use Php on a project you want You can use Php on a project you want You can use Php on a project you want',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
