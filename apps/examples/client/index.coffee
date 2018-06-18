{ mountWithApolloProvider } = require '../../../react/apollo/index.js'
{ default: FollowButton } = require '../../../react/components/FollowButton'

singleExampleTemplate = -> require('../templates/example.jade') arguments...
examplesTemplate = -> require('../templates/examples.jade') arguments...

module.exports = ->

  # 
  # Load more channels (single example category)
  # 

  $(document).on 'click', '.js-load-more', (e) ->
    e.preventDefault()    
    id = $(this).data('id')
    
    $.get "/api/examples/#{id}", (example) =>
      $(this).closest('.js-example').html singleExampleTemplate
        example: example

  # 
  # Follow buttons
  # 

  setupFollowButtons = ->
    $('.js-channel-group').each ->
      props = { id: $(this).data('id'), type: 'CHANNEL' }
      mountNode = $(this).find('.js-example-channel-follow')
      mountWithApolloProvider(FollowButton, props, mountNode)
  
  setupFollowButtons()

  #
  # Examples pagination
  # 

  $('.js-load-more-examples').on 'click', (e) ->
    e.preventDefault()

    currentPage = parseInt($(this).attr('data-current-page')) + 1
    totalPages = $(this).attr('data-total-pages')

    $.get "/api/examples?page=#{currentPage}", (examples) ->
      html = examplesTemplate examples: examples
      $('.Examples-list').append html

      setupFollowButtons()

      if currentPage >= totalPages
        $('.js-load-more-examples').hide()
      else
        $('.js-load-more-examples').attr('data-current-page', currentPage)



