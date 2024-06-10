OpenAI.configure do |config|
  config.access_token = Rails.application.credentials.openai.secret_key
end
