class ChatGptService
  require "openai"

  def initialize
    @openai = OpenAI::Client.new(access_token: Rails.application.credentials.openai.secret_key)
  end

  def chat(prompt)
    response = @openai.chat(
      parameters: {
        model: "gpt-3.5-turbo", # Required. # 使用するGPT-3のエンジンを指定
        messages: [{ role: "system", content: "You are a helpful assistant. response to japanese" }, { role: "user", content: prompt }],
        max_tokens: 200, # 応答の長さを指定
      },
    )
    response["choices"].first["message"]["content"]
  end
end
