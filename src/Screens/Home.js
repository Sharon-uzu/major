import React, { useState } from 'react';
import { Home, Users, MessageSquare, Bell, Search, Menu, ThumbsUp, MessageCircle, Share2, MoreHorizontal, Globe, Image, Smile, Video } from 'lucide-react';

export default function FacebookHomepage() {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'SJ',
      time: '2h',
      content: 'Just finished an amazing hike in the mountains! The view was absolutely breathtaking. 🏔️',
      image: true,
      likes: 234,
      comments: 45,
      shares: 12
    },
    {
      id: 2,
      author: 'Tech News Daily',
      avatar: 'TN',
      time: '4h',
      content: 'Breaking: New advancements in AI technology are transforming how we interact with computers. What are your thoughts on this?',
      image: false,
      likes: 1240,
      comments: 328,
      shares: 456
    },
    {
      id: 3,
      author: 'Michael Chen',
      avatar: 'MC',
      time: '6h',
      content: 'Celebrating 5 years at my company today! Grateful for all the amazing people I\'ve worked with. 🎉',
      image: true,
      likes: 567,
      comments: 89,
      shares: 23
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        avatar: 'YO',
        time: 'Just now',
        content: newPost,
        image: false,
        likes: 0,
        comments: 0,
        shares: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="homepage min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="header-c max-w-7xl mx-auto px-4">
          <div className="header-cc flex items-center justify-between h-14">
            {/* Left section */}
            <div className="header-left flex items-center space-x-2">
              <div className="logo w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div className="h-search relative hidden md:block">
                <Search className="search-icon absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-full w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Center navigation */}
            <nav className="header-center hidden md:flex space-x-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-12 py-3 rounded-lg transition-colors ${
                  activeTab === 'home'
                    ? 'active text-blue-600 border-b-4 border-blue-600'
                    : 'inactive text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Home className="h-6 w-6" />
              </button>
              <button
                onClick={() => setActiveTab('friends')}
                className={`px-12 py-3 rounded-lg transition-colors ${
                  activeTab === 'friends'
                    ? 'active text-blue-600 border-b-4 border-blue-600'
                    : 'inactive text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Users className="h-6 w-6" />
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-12 py-3 rounded-lg transition-colors ${
                  activeTab === 'messages'
                    ? 'active text-blue-600 border-b-4 border-blue-600'
                    : 'inactive text-gray-500 hover:bg-gray-100'
                }`}
              >
                <MessageSquare className="h-6 w-6" />
              </button>
            </nav>

            {/* Right section */}
            <div className="header-right flex items-center space-x-2">
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Menu className="hr-i h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <MessageSquare className="hr-i h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <Bell className="hr-i h-5 w-5" />
              </button>
              <div className="prof w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                YO
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="main-content max-w-7xl mx-auto pt-20 px-4">
        <div className="main-grid grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sidebar bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-3">
                <div className="side-flex flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    YO
                  </div>
                  <span className="font-semibold">Your Profile</span>
                </div>
                <div className="side-flex flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Users className="side-i h-9 w-9 text-blue-600" />
                  <span className="font-semibold">Friends</span>
                </div>
                <div className="side-flex flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Users className="side-i cyan h-9 w-9 text-cyan-600" />
                  <span className="font-semibold">Groups</span>
                </div>
                <div className="side-flex flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Video className="side-i h-9 w-9 text-blue-600" />
                  <span className="font-semibold">Watch</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Feed */}
          <main className="lg:col-span-6">
            {/* Create post */}
            <div className="main-main bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="main-search flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  YO
                </div>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none hover:bg-gray-200 transition-colors"
                />
              </div>
              <div className="main-below border-t pt-3 flex justify-between items-center">
                <div className="mb-flex flex space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                    <Video className="bb-i h-5 w-5 text-red-500" style={{color:'#ef4444'}}/>
                    <span className="hidden sm:inline font-semibold">Live video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                    <Image className="bb-i h-5 w-5 text-green-500" style={{color:'#22c55e'}}/>
                    <span className="hidden sm:inline font-semibold">Photo/video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                    <Smile className="bb-i h-5 w-5 text-yellow-500" style={{color:'#eab308'}}/>
                    <span className="hidden sm:inline font-semibold">Feeling</span>
                  </button>
                </div>
                {newPost.trim() && (
                  <button
                    onClick={handlePost}
                    className="post-btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Post
                  </button>
                )}
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="post bg-white rounded-lg shadow-sm mb-4">
                {/* Post header */}
                <div className="post-header p-4">
                  <div className="ph-flex flex items-center justify-between mb-3">
                    <div className="ph-content flex items-center space-x-3">
                      <div className="avatar w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {post.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{fontWeight:500}}>{post.author}</h3>
                        <div className="post-time flex items-center space-x-1 text-xs text-gray-500">
                          <span>{post.time}</span>
                          <span>·</span>
                          <Globe className="globe h-3 w-3" />
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Post content */}
                  <p className="post-content text-gray-800 mb-3">{post.content}</p>
                </div>

                {/* Post image */}
                {post.image && (
                  <div className="post-image bg-gray-200 h-96 flex items-center justify-center text-gray-400">
                    <Image className="h-16 w-16" />
                  </div>
                )}

                {/* Post stats */}
                <div className="post-stat px-4 py-2 flex items-center justify-between text-sm text-gray-500 border-t">
                  <div className="post-stat-c flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      <div className="thumbs w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <ThumbsUp className="thumbs-i h-3 w-3 text-white" />
                      </div>
                    </div>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>{post.comments} comments </span>
                    <span>{post.shares} shares</span>
                  </div>
                </div>

                {/* Post actions */}
                <div className="post-actions px-4 py-2 border-t flex justify-between">
                  <button className="flex items-center space-x-2 flex-1 justify-center py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 font-semibold">
                    <ThumbsUp className="h-5 w-5" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 flex-1 justify-center py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 font-semibold">
                    <MessageCircle className="h-5 w-5" />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center space-x-2 flex-1 justify-center py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 font-semibold">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </main>

          {/* Right sidebar */}
          <aside className="right-sidebar hidden lg:block lg:col-span-3">
            <div className="rs-c bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-600 mb-4">Contacts</h3>
              <div className="space-y-3">
                {['Emma Wilson', 'David Lee', 'Lisa Park', 'James Brown', 'Anna Davis', 'Tom Miller'].map((name, i) => (
                  <div key={i} className="rs-cc flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <div className="relative" style={{position:'relative'}}>
                      <div className="grade w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="abs absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}