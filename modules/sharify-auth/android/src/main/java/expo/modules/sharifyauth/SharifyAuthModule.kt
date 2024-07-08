package expo.modules.sharifyauth

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class SharifyAuthModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("SharifyAuth")

    Function("hello") {
      "Hello world! 👋"
    }
  }
}
