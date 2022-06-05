---
title: Images not loading in React Native on iOS 14 devices & Xcode 12
date: "2021-03-25T22:12:03.284Z"
categories: ["react-native"]
excerpt: Recently while releasing an update for our iOS app we encountered a weird issue in which images rendered using < Image > component were not getting rendered at all on iOS devices. This was a shocker to us, as no major change was made in our app, then why this issue?
permalink: "/react-native/images-not-loading-in-react-native-on-ios-14-devices-xcode-12/211/"
# SEO
meta_title: Fix Images not loading in React Native on iOS 14 devices & Xcode 12
meta_description: If images have stopped working in your react native project after upgrading to iOS 14 on xCode 12, then this solution might just work for you.
meta_keywords: "How to fix image not loading iOS react native, Image not loading iOS 14 and React Native"
meta_image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGTF0i8xqGLcp1q0ozq0BpxPrU2mKtJDk2t9c_iLDcoguEDZyS6dhkyj38gLpQZ4oKhu3A1LgD8ObxAGV2pWAXLQD32C2nNHCIEIValbktf3W_gWIffiug9WX8vIHGGlAvg_AALTg52-3j3--YYkit5L7XWW1sXQDVaeYjc4zkgP08A3Zijk42tDz-9Q/s1600/og-211.png
---

Recently while releasing an update for our iOS app we encountered a weird issue in which images rendered using < Image > component were not getting rendered at all on iOS devices. This was a shocker to us, as no major change was made in our app, then why this issue?

After searching about this issue we found out that this issue of images not rendering on iOS devices is specific to apps made with React Native 0.63.1 and iOS 14 devices.

The solution for this problem is quite straight forward, so lets try to solve this without wasting any more time.

#### Solution 1 – Upgrade React Native

Since this is a known issue, the react native team has fixed this issue. So, if you can then you should try upgrading the React Native package for your app.

Note: While upgrading the version of react-native, we ran into multiple issues. So, we dropped the plan. Cheers !!

<!--ADSENSE-->

#### Solution 2 – Manual Fixes

As solution 1 didn’t work out for us we tried providing a patch fix for this solution. This solution will help in loading images in your react native applications on iOS 14 devices.

1. Open file – node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m in your text editor.
2. Update the content of the file by replacing few lines with updated code.

```swift
# REPLACE THE BELOW CODE
#pragma mark - CALayerDelegate

- (void)displayLayer:(CALayer *)layer
{
  if (_currentFrame) {
    layer.contentsScale = self.animatedImageScale;
    layer.contents = (__bridge id)_currentFrame.CGImage;
  }
}

# WITH THIS CODE
#pragma mark - CALayerDelegate

- (void)displayLayer:(CALayer *)layer
{
  if (_currentFrame) {
    layer.contentsScale = self.animatedImageScale;
    layer.contents = (__bridge id)_currentFrame.CGImage;
  } else {
    [super displayLayer:layer];
  }
}
```

3. Once you have made the above change, run the command – npx patch-package react-native
4. Install patch-package by using the command – npm install -g patch-package
5. Modify the package.json file.

```javascript
"scripts": {
  ...
  "postinstall": "patch-package",
}
```

Once you have made all the changes, try running your app once again. This time hopefully it will work.
