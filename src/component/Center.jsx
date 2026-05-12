import React from 'react'

function Center() {
  return (
    <div className="p-8 bg-white">

      {/* Top 3 Cards */}
      <div className="flex gap-4 mb-10">

        {/* Card 1 - Dark */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 flex-1 flex flex-col justify-between min-h-56">
          <p className="text-lg">
            Professional hard courts with tournament-grade lighting & climate control —
            play in <span className="font-bold">perfect conditions, in any season.</span>
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-10 h-6 bg-blue-500 rounded-full flex items-center px-1">
              <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
            </div>
            <span className="text-sm text-gray-400">Game Mode</span>
          </div>
        </div>

        {/* Card 2 - Image */}
        <div className="relative flex-1 rounded-2xl overflow-hidden min-h-56">
          <img
            src="https://picsum.photos/400/300"
            alt="coach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white bg-opacity-80 text-gray-800 font-semibold px-4 py-2 rounded-full text-sm">
              Private & Group Lessons
            </span>
          </div>
        </div>

        {/* Card 3 - Stats */}
        <div className="bg-gray-50 rounded-2xl p-6 flex-1">
          <p className="text-5xl font-bold">100+</p>
          <p className="font-semibold text-lg">Pro Coaches</p>
          <p className="text-gray-500 text-sm mb-4">
            Certified professionals ready to boost your game.
          </p>
          {[
            { label: "Beginner", count: 55, dots: 14 },
            { label: "Intermediate", count: 40, dots: 10 },
            { label: "Advanced", count: 35, dots: 7 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 mb-2">
              <span className="text-sm w-24 text-gray-600">{item.label}</span>
              <div className="flex gap-1">
                {Array.from({ length: item.dots }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
                ))}
              </div>
              <span className="text-sm text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 mb-6">A few more facts about us in numbers</p>

      {/* Bottom Stats */}
      <div className="flex justify-around text-center">
        {[
          { number: "12 000+", label: "Hours of play annually" },
          { number: "89%", label: "Player Retention Rate" },
          { number: "1,200+", label: "Active Members" },
          { number: "125+", label: "Annual Tournaments" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold">{stat.number}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  )
}


export default Center



