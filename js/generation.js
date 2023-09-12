import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';
import{PICTURE_COUNT, AVATAR_COUNT, LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENT_COUNT, COMMENT_LINES, DESCRIPTIONS, NAME} from './data.js';

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({
      length: getRandomInteger(1, 2)
    }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({
      length: getRandomInteger(0, COMMENT_COUNT)
    },
    createComment
  )
});

const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures};
