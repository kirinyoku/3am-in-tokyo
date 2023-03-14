import React, { useRef } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import getPredict from '../../api/getPredict';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const promptInput = useRef(null);
  const sizeInput = useRef();

  const { mutate } = useMutation(getPredict, {
    onError: () => setError(true),
    onSettled: () => setLoading(false),
    onSuccess: (data) => setPredict(data),
  });

  const setPredict = (predict = '') => {
    dispatch({
      type: 'SET_PREDICT',
      payload: predict,
    });
  };

  const setLoading = (state) => {
    dispatch({
      type: 'SET_IS_LOADING',
      payload: state,
    });
  };

  const setError = (state) => {
    dispatch({
      type: 'SET_ERROR',
      payload: state,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setPredict('');
    setLoading(true);
    const size = sizeInput.current.value;
    const prompt = promptInput.current.value;
    mutate({ prompt, size });
  };

  return (
    <section className="form" aria-label="input">
      <h2 className="form__title">
        Input <span>インプット</span>
      </h2>
      <form onSubmit={(e) => onSubmit(e)} id="input-form">
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="prompt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="presentation">
              <polyline points="4 7 4 4 20 4 20 7"></polyline>
              <line x1="9" y1="20" x2="15" y2="20"></line>
              <line x1="12" y1="4" x2="12" y2="20"></line>
            </svg>
            <code>prompt</code>
          </label>
          <Input
            required
            id="prompt"
            type="text"
            name="prompt"
            ref={promptInput}
            autoComplete="off"
            placeholder="An astronaut riding a horse in photorealistic style."
          />
          <p className="form__description">Input prompt</p>
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="size">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block mr-2 w-3 h-3"
              role="presentation">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <code>size</code>
          </label>
          <Select
            id="size"
            ref={sizeInput}
            defaultValue="512x512"
            options={['256x256', '512x512', '1024x1024']}
          />
          <p className="form__description">
            Size of output image. Maximum size is 1024x1024 because of memory limits
          </p>
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default Form;
