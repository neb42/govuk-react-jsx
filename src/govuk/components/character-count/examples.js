import examples from '../../../../.cache/govuk-frontend-examples/character-count.json'

// Insert additional examples here if desired

// Example to exercise https://github.com/alphagov/govuk-frontend/pull/1553
examples.examples.push({
  name: 'with form group',
  data: {
    name: 'more-detail',
    id: 'more-detail',
    maxlength: 10,
    formGroup: {
      classes: 'class-on-the-form-group'
    },
    label: {
      text: 'Can you provide more detail?'
    }
  }
})

export default examples
