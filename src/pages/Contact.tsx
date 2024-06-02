import useTitle from '../hooks/useTitle';

const Contact = () => {
  useTitle('Contact');
  return (
    <>
      <h1 className="text-xl m-b-2">Nous contacter</h1>
      <p>
        Si vous rencontrez un problème sur notre site vous pouvez{' '}
        <a className="text-accent" href="mailto:bapt.loiseau+rhum@gmail.com">
          nous conctater
        </a>
      </p>
    </>
  );
};
export default Contact;
