import React from "react";
import { Field } from "formik";
import styles from "./WrappedRadioInput.module.scss";

const WrappedRadioInput = () => {
   return (
    <section className={styles.container}>
      <section className={styles.radio}>
        <Field type="radio" name="picked" value="Buyer" />
        Join As a Buyer
        <h6>
          I am looking for a Name, Logo or Tagline for my business, brand or
          product.
        </h6>
      </section>

      <section className={styles.radio}>
        <Field type="radio" name="picked" value="Seller" />
        Join As a Creative or Marketplace Seller
        <h6>
          I plan to submit name ideas, Logo designs or sell names in Domain
          Marketplace.
        </h6>
      </section>
    </section>
  );
};
export default WrappedRadioInput;
