import classes from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={classes.container}>
      <p className={classes.container__text}>
        Collection of lighting is inspired by the geometric works of the great
        Suprematist artists Kissitzky and Kazimir Malevich.
      </p>
      <p className={classes.container__text}>
        Suprematism is a modernist movement in the art of the early twentieth
        century, focused on the basic geometric forms, such as circles, squares,
        lines and rectangles. The geometric structure of the lamps will always
        look like a small art objects in your house.
      </p>
    </section>
  );
};

export default Introduction;
