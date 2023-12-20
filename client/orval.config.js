module.exports = {
  main: {
    input: './src/shared/api/generated/schema.yaml',
    output: {
      target: './src/shared/api/generated/types.ts',
      prettier: true,
      override: {
        mutator: {
          path: './src/shared/api/api-instance.ts',
          name: 'createInstance',
        },
      },
    },
  },
};

