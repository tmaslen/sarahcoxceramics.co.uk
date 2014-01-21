require 'jekyll_asset_pipeline'

module JekyllAssetPipeline

  # JAVASCRIPT BEING AUTO CONCATENATED

  # SASS CONVERSION
  class SassConverter < JekyllAssetPipeline::Converter
    require 'sass'

    def self.filetype
      '.scss'
    end

    def convert
      # return Sass::Engine.new(@content, load_paths: ['.','_assets/scss/site'], syntax: :scss).render
      return Sass::Engine.new(@content, {:load_paths => ['.','_assets/scss/site'], :syntax => :scss}).render
    end

  end

  # CSS TAG TEMPLATE CHANGE
  class CssTagTemplate < JekyllAssetPipeline::Template
    def self.filetype
      '.css'
    end

    def html
      "<link href='/#{@path}/#{@filename}' rel='stylesheet' type='text/css' media='screen' />"
    end
  end

  # JS TAG TEMPLATE CHANGE
  class JsTagTemplate < JekyllAssetPipeline::Template
    def self.filetype
      '.js'
    end

    def html
      "<script src='/assets/#{@filename}' type='text/javascript'></script>"
    end
  end

  # COMPRESS JAVASCRIPT
  # class JavaScriptCompressor < JekyllAssetPipeline::Compressor
  #   require 'yui/compressor'

  #   def self.filetype
  #     '.js'
  #   end

  #   def compress
  #     return YUI::JavaScriptCompressor.new(:munge => true).compress(@content)
  #   end
  # end

end